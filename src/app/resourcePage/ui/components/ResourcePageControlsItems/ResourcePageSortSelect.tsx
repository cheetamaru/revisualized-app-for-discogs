import { ResourcePageSort } from '@/app/resourcePage/domain/ResourcePageSort'
import { ResourcePageSortOptions } from '@/app/resourcePage/domain/ResourcePageSortOptions'
import { Select, Space } from 'antd'
import React from 'react'

type Props = {
    sortValue: ResourcePageSort;
    onChange: (value: ResourcePageSort) => void;
}

const ResourcePageSortSelect = ({
    sortValue,
    onChange,
}: Props) => {
  return (
    <Space>
        <span>Sort: </span>
        <Select
            style={{ width: 130 }}
            options={ResourcePageSortOptions}
            placeholder="Select sorting"
            value={sortValue}
            onChange={onChange}
        />
    </Space>
  )
}

export default ResourcePageSortSelect;
