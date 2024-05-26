"use client"
import { Pagination } from 'antd'
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
    totalPages?: number;
    pageSize?: number;
    style?: React.CSSProperties;
}

const CollectionPagination = ({ totalPages, pageSize, style }: Props) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const { replace } = useRouter();
    
    const createPageURL = (pageNumber: number | string, pageSize: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      params.set('per_page', pageSize.toString());
      replace(`${pathname}?${params.toString()}`);
    };
  return (
    <Pagination
        style={style}
        hideOnSinglePage
        defaultCurrent={1}
        current={currentPage}
        pageSize={pageSize}
        defaultPageSize={20}
        total={totalPages}
        onChange={createPageURL}
        onShowSizeChange={createPageURL}
    />
  )
}

export default CollectionPagination