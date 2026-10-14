"use client";

import { memo } from "react";

function UndoRedoControl({ undo, redo }: any) {
    return <>
    <div className="flex gap-2 mb-5">
        <button onClick={undo} className="cursor-pointer rounded-lg bg-white px-4 py-2">Undo</button>
        <button onClick={redo} className="cursor-pointer rounded-lg bg-white px-4 py-2">Redo</button>
    </div>
    </>
}

export default memo(UndoRedoControl);