import { useSearchParams } from 'next/navigation';
import { ResourcePagePaginationDomain } from '../domain/ResourcePagePaginationDomain';
import { useResourcePageQueryParams } from './useResourcePageQueryParams';
import { ResourcePageQueryParam } from '../domain/ResourcePageQueryParam';

const {
    validateCurrentPage,
    validatePerPage,
} = ResourcePagePaginationDomain;

export const useResourcePagePaginationNavigation = () => {
    const searchParams = useSearchParams();

    const currentPage = validateCurrentPage(searchParams.get(ResourcePageQueryParam.page))
    const pageSize = validatePerPage(searchParams.get(ResourcePageQueryParam.perPage));

    const { setParams } = useResourcePageQueryParams()
    
    const replacePageURL = (pageNumber: number | string, pageSize: number | string) => {
        setParams([
            {
                param: ResourcePageQueryParam.page,
                valueToSet: pageNumber,
            },
            {
                param: ResourcePageQueryParam.perPage,
                valueToSet: pageSize,
            }
        ])
    };

    return {
        currentPage,
        pageSize,
        replacePageURL,
    }
}