import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ResourcePagePaginationDomain } from '../domain/ResourcePagePaginationDomain';

const {
    defaultValues,
} = ResourcePagePaginationDomain;

export const useResourcePagePaginationNavigation = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { replace } = useRouter();

    const currentPage = Number(searchParams.get('page')) || defaultValues.currentPage; // TODO: move to a service
    const pageSize = Number(searchParams.get('per_page')) || defaultValues.pageSize;
    
    const replacePageURL = (pageNumber: number | string, pageSize: number | string) => {
      const params = new URLSearchParams(searchParams);

      params.set('page', pageNumber.toString());
      params.set('per_page', pageSize.toString());

      replace(`${pathname}?${params.toString()}`);
    };

    return {
        currentPage,
        pageSize,
        replacePageURL,
    }
}