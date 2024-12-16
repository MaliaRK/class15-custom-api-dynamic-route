import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json([
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
    ])
}


// export const POST = () => {
//     //database connection (hamre pas data base hoga to hum insert, update ya delete krne kelye yaha pe code lkhengy)
//     // insert data

//     return NextResponse.json(
//         {message: "success"}
//     )
// }


// {
    //     id: 1,
    //     name: "The Day",
    //     title: "the day",
    //     author: "combos"
    // },