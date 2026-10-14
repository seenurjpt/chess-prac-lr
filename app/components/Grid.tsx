"use client";

import { memo } from "react";
import Cell from "./Cell";

function Grid({ rows = 8, selected, onCellClick, cols = 8 }: any) {
    const selectedSet = new Set(selected)
    console.log(rows, cols)
    return <>
        <div className="grid w-full border-2" style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}>
            {Array.from({ length: rows * cols }, (_, i) => {
                const newRow = Math.floor(i / cols)
                const newCol = i % cols;
                const id = `${newRow}-${newCol}`
                return (

                    <Cell key={id}
                        id={id}
                        isDark={(newRow + newCol)%2===1}
                        selected={selectedSet.has(id)}
                        onClick={onCellClick}
                            />

                )
            })}
        </div>
    </>
}

export default memo(Grid);