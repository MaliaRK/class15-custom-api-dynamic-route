import { NextRequest, NextResponse } from "next/server"

interface Books {
    id: number;
    name: string;
    title: string;
    author: string;
}

const books: Books[] = [
    {
        id: 1,
        name: "The Day",
        title: "the day",
        author: "combos"
    },
    {
        id: 2,
        name: "The Evening",
        title: "the evening",
        author: "voyo"
    },
    {
        id: 3,
        name: "The Night",
        title: "the night",
        author: "schelm"
    },
]

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const data = await params;
    const book = books.find((book) => String(book.id) === data.id)
    if(!book) {
        return NextResponse.json(
            {Error: "This book does not exist."}
        )
    }
    return NextResponse.json(
        { book }       
    )
}
