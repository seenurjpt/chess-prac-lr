"use client";

import { memo } from "react";

function Cell({ id, isDark, selected, onClick }:any) {

    return <>
        <button
            type="button"
            onClick={() => onClick(id)}
            className={`${isDark ? "bg-neutral-900" : "bg-white"} ${selected ? "border-amber-400" : "border-transparent"} cursor-pointer border-4 aspect-square`}
            aria-pressed={selected}
        />
    </>
}

export default memo(Cell);