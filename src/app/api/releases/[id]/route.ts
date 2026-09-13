import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import apiClient from "@/shared/services/api/apiClient";

const getRelease = unstable_cache(async (id: number) => {
    const { data } = await apiClient.database().getRelease(id);
    return data;
}, ["release-details"], { revalidate: 3600 });

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    if (!Number.isSafeInteger(id) || id <= 0) {
        return NextResponse.json({ error: "Invalid release" }, { status: 400 });
    }
    try {
        return NextResponse.json(await getRelease(id));
    } catch {
        return NextResponse.json({ error: "Unable to load release details. Please try again." }, { status: 502 });
    }
}
