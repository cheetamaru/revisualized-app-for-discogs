import { getUser } from "@/utils/requests/getUser";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-cache' // defaults to auto

type Params = {
  username: string
}

export async function GET(request: NextRequest, {params}: { params: Params }) {
    const username = params.username
    
    const user = await getUser(username)

    return NextResponse.json(user)
}