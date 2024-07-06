import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ResourcePageQueryParam } from "../domain/ResourcePageQueryParam";
import { MaybeArray } from "@/shared/types/general/MaybeArray";
import { toArray } from "@/shared/utils/normalizers/toArray";
import { ResourcePagePaginationDomain } from "../domain/ResourcePagePaginationDomain";
import { validateResourcePageSort } from "../domain/ResourcePageSort";
import { validateResourcePageLayout } from "../domain/ResourcePageLayout";

type TypeWithToString = { toString: () => string }

type ParamsToSet<T extends TypeWithToString> = {
    param: ResourcePageQueryParam;
    valueToSet: T;
}

const {
    validateCurrentPage,
    validatePerPage,
} = ResourcePagePaginationDomain;

export const useResourcePageQueryParams = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { replace } = useRouter();

    const currentPage = validateCurrentPage(searchParams.get(ResourcePageQueryParam.page))
    const pageSize = validatePerPage(searchParams.get(ResourcePageQueryParam.perPage));
    const sort = validateResourcePageSort(searchParams.get(ResourcePageQueryParam.sort));
    const layout = validateResourcePageLayout(searchParams.get(ResourcePageQueryParam.layout));

    const setParams = <T extends TypeWithToString>(paramsToSet: MaybeArray<ParamsToSet<T>>) => {
        const params = new URLSearchParams(searchParams);

        const paramsToSetArray = toArray(paramsToSet);

        paramsToSetArray.forEach(({ param, valueToSet }) => {
            params.set(param, valueToSet.toString());
        })
  
        replace(`${pathname}?${params.toString()}`);
      };

    

    return {
        currentPage,
        pageSize,
        sort,
        layout,
        setParams,
    }
}