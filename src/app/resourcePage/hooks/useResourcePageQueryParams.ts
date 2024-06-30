import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ResourcePageQueryParam } from "../domain/ResourcePageQueryParam";
import { MaybeArray } from "@/shared/types/general/MaybeArray";
import { toArray } from "@/shared/utils/normalizers/toArray";

type TypeWithToString = { toString: () => string }

type ParamsToSet<T extends TypeWithToString> = {
    param: ResourcePageQueryParam;
    valueToSet: T;
}

export const useResourcePageQueryParams = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { replace } = useRouter();

    const setParams = <T extends TypeWithToString>(paramsToSet: MaybeArray<ParamsToSet<T>>) => {
        const params = new URLSearchParams(searchParams);

        const paramsToSetArray = toArray(paramsToSet);

        paramsToSetArray.forEach(({ param, valueToSet }) => {
            params.set(param, valueToSet.toString());
        })
  
        replace(`${pathname}?${params.toString()}`);
      };

    return {
        setParams,
    }
}