import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// export const dynamic = "force-dynamic";

const file = path.join(process.cwd(), "data", "board.json");

export async function GET() {
    try {
        const text = await fs.readFile(file, "utf-8")
        return NextResponse.json(JSON.parse(text));
    } catch {
        return NextResponse.json({ selected: [] })
    }
}

export async function POST(req: any) {
    const { selected } = await req.json();
    if (!Array.isArray(selected)) {
        return NextResponse.json({ error: "selected must be an array", status: 400 })
    }
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify({ selected }))
    return NextResponse.json({ ok: true, status: 200 })
}