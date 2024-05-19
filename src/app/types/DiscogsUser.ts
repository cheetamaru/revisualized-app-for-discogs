import { getUser } from "@/utils/requests/getUser";

export type DiscogsUser = Awaited<ReturnType<typeof getUser>>;
