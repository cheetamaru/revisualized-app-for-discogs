import { useSearchParams } from 'next/navigation';
import { ResourcePagePaginationDomain } from '../domain/ResourcePagePaginationDomain';
import { useResourcePageQueryParams } from './useResourcePageQueryParams';
import { ResourcePageQueryParam } from '../domain/ResourcePageQueryParam';

const {
    defaultValues,
} = ResourcePagePaginationDomain;

export const useResourcePagePaginationNavigation = () => {
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || defaultValues.currentPage; // TODO: move to a service
    const pageSize = Number(searchParams.get('per_page')) || defaultValues.pageSize;

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