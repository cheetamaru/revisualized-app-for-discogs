import { getWantlist } from "@/utils/requests/getWantlist";

export type DiscogsWantlistResponse = Awaited<ReturnType<typeof getWantlist>>