import { getUser } from "@/utils/requests/getUser";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-cache' // defaults to auto

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const username = searchParams.get('user') || ""
    
    const user = await getUser(username)

    return NextResponse.json(user)
}