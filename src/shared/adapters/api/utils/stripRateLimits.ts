import { DiscogsRateLimitedResponse } from "@/shared/types/discogs/rateLimit/DiscogsRateLimitedResponse";
import { typedKeys } from "@/shared/utils/type/typedKeys";

type DirtyResponse<T> = Promise<DiscogsRateLimitedResponse<T>>
type CleanResponse<T> = Promise<T>

type AbstractAdapter = {
    [X: string]: (...args: any[]) => DirtyResponse<any>
}

type StrippedRateLimit<T> = {
    [X in keyof T]: T[X] extends (...args: infer ARGS) => DirtyResponse<infer RESPONSE>
        ? (...args: ARGS) => CleanResponse<RESPONSE>
        : T[X]
}

const stripRateLimitMethod = <
        Args extends unknown[],
        Response
    >(fn: (...args: Args) => DirtyResponse<Response>) => (...args: Args): CleanResponse<Response> => {
        return fn(...args)
            .then(({ data, rateLimit }) => {

                console.log("rateLimit", rateLimit)

                return data
            })
    }

export const stripRateLimits = <T extends AbstractAdapter>(apiAdapter: T): StrippedRateLimit<T> => {
    return typedKeys(apiAdapter)
        .reduce((acc, key) => {
            acc[key] = stripRateLimitMethod(apiAdapter[key]) as StrippedRateLimit<T>[keyof T];

            return acc
        }, {} as StrippedRateLimit<T>)
}
    