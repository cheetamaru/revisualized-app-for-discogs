import { MaybeArray } from "@/shared/types/general/MaybeArray";

export const toArray = <T>(val: MaybeArray<T>): T[] => {
    if (Array.isArray(val)) {
        return val;
    }

    return [val]
}
