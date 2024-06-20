"use client"
import React from 'react'
import { Pagination } from 'antd'
import { useResourcePagePaginationNavigation } from '../../hooks/useResourcePagePaginationNavigation';

type Props = {
    totalPages?: number;
    style?: React.CSSProperties;
}

const ResourcePagePagination = ({ totalPages, style }: Props) => {
  const {
    currentPage,
    pageSize,
    replacePageURL
  } = useResourcePagePaginationNavigation()

  return (
    <Pagination
        style={style}
        hideOnSinglePage
        defaultCurrent={1}
        current={currentPage}
        pageSize={pageSize}
        defaultPageSize={20}
        total={totalPages}
        onChange={replacePageURL}
        onShowSizeChange={replacePageURL}
    />
  )
}

export default ResourcePagePagination;
