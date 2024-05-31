import { DiscogsRateLimitedResponse } from "@/shared/types/discogs/rateLimit/DiscogsRateLimitedResponse";

export const stripRateLimit = <T>(responseWithRateLimit: DiscogsRateLimitedResponse<T>): T  => {
    return responseWithRateLimit.data
}
