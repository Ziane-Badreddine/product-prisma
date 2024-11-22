import { prisma } from "@/prisma/route"
import { NextResponse } from "next/server"


export async function POST(reqeust){
    const body = await reqeust.json()

    const newProduuct = await prisma.product.create({
        data:{
            ...body
        }
    })

    return NextResponse.json(newProduuct,{status: 201})

}

export async function GET(){

    const produucts = await prisma.product.findMany()

    return NextResponse.json(produucts,{status: 200})

}