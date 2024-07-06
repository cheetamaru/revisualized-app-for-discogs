import { useResourcePageQueryParams } from './useResourcePageQueryParams';
import { ResourcePageQueryParam } from '../domain/ResourcePageQueryParam';

export const useResourcePagePaginationNavigation = () => {
    const { setParams, currentPage, pageSize } = useResourcePageQueryParams()
    
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