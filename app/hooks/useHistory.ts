import { useCallback, useState } from "react";

export default function useHistory(initial: any) {

    const [history, setHistory] = useState({
        past: [],
        present: initial,
        future: []
    })
    //back
    const undo = useCallback(() => {
        setHistory((s: any) => {
            if (!s.past.length) return s;
            return {
                past: s.past.slice(0, -1),
                present: s.past[s.past.length - 1],
                future: [s.present, ...s.future]
            }
        })
    }, [])
    //forward
    const redo = useCallback(() => {
        setHistory((s: any) => {
            if (!s.future.length) return s;
            const [next, ...rest] = s.future;
            return {
                past: [...s.past, ...s.present],
                present: next,
                future: rest
            }
        })
    }, []);

    const set = useCallback((next: any | ((prev: any) => any)) => {
        setHistory((s: any) => {
            const value = typeof next === "function" ? (next as (p: any) => any)(s.present) : next;
            return {
                present: value, future: [],
                past: [...s.past, s.present]
            }
        })
    }, [])

    const reset = useCallback((value: any) => {
        setHistory({ past: [], present: value, future: [] })
    },[])
    return {
        state: history.present,
        undo,
        set,
        redo,
        reset,
    }
}