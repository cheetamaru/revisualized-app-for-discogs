import { ResourcePageSearchParams } from "../types/ResourcePageSearchParams";
import { validateResourcePageLayout } from "../domain/ResourcePageLayout";
import { ResourcePagePaginationDomain } from "../domain/ResourcePagePaginationDomain";
import { validateResourcePageSort } from "../domain/ResourcePageSort";
import { ResourcePageQueryParam } from "../domain/ResourcePageQueryParam";

const {
    validateCurrentPage,
    validatePerPage,
} = ResourcePagePaginationDomain;

export const getResourcePageParams = (searchParams?: ResourcePageSearchParams) => {
    const currentPage = validateCurrentPage(searchParams?.[ResourcePageQueryParam.page]);
    const perPage = validatePerPage(searchParams?.[ResourcePageQueryParam.perPage]);
    const sort = validateResourcePageSort(searchParams?.[ResourcePageQueryParam.sort]);
    const layout = validateResourcePageLayout(searchParams?.[ResourcePageQueryParam.layout]);

    return {
        currentPage,
        perPage,
        sort,
        layout,
    }
}