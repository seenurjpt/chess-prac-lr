"use client";

import { memo, useCallback, useEffect } from "react";
import Grid from "./Grid";
import UndoRedoControl from "./UndoRedoControl";
import useHistory from "../hooks/useHistory";

function Chessboard({ size = 8 }) {
    const { state: selected, set, undo, redo, reset } = useHistory([]);
    const toggle = useCallback((id: string) =>
        set((prev: any) =>
            prev.includes(id) ? prev.filter((x: any) => x != id) : [...prev, id]), [set])

    async function save() {
        try {
            const res = await fetch("api/board", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ selected })
            })

            alert(res.ok ? "Saved" : "Save failed")
        }
        catch {
            alert("Save failed")
        }

    }

    useEffect(() => {
        fetch("/api/board")
            .then((res) => res.json())
            .then((data) => reset(data.selected))
    }, [])
    return <>
        <div className="w-[min(90vw,500px)] bg-black flex flex-col items-center gap-5">
            <h1 className="text-white font-bold">Chess Board</h1>

            <UndoRedoControl redo={redo} undo={undo} />
            <Grid selected={selected} onCellClick={toggle} rows={size} cols={size} />
        </div>


        <button onClick={() => save()} className="cursor-pointer rounded-lg bg-black text-white px-4 py-2">
            Save
        </button>
    </>
}

export default memo(Chessboard);