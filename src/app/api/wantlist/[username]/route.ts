import { getWantlist } from "@/utils/requests/getWantlist";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    username: string
  }

export const dynamic = 'force-cache' // defaults to auto

/**
 * @deprecated
 */
export async function GET(request: NextRequest, {params}: { params: Params }) {
    const username = params.username

    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page') || ""
    const per_page = searchParams.get('per_page') || ""

    let paginationParams

    if (page && per_page) {
        paginationParams = {
            page: Number(page),
            per_page: Number(per_page),
        }
    }

    const user = await getWantlist(username, paginationParams)

    return NextResponse.json(user)
}