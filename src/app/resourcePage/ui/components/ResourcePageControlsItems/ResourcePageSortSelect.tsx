import {
    createResourcePageSort,
    getDefaultResourcePageSortOrder,
    getResourcePageSortDetails,
    getResourcePageSortOrderLabel,
    ResourcePageSort,
    ResourcePageSortField,
} from '@/app/resourcePage/domain/ResourcePageSort'
import { ResourcePageSortOptions } from '@/app/resourcePage/domain/ResourcePageSortOptions'
import { Button, Select, Space, Tooltip } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import React from 'react'

type Props = {
    sortValue: ResourcePageSort;
    onChange: (value: ResourcePageSort) => void;
}

const ResourcePageSortSelect = ({
    sortValue,
    onChange,
}: Props) => {
  const { field, order } = getResourcePageSortDetails(sortValue)
  const orderLabel = getResourcePageSortOrderLabel(field, order)

  const handleFieldChange = (newField: ResourcePageSortField) => {
    onChange(createResourcePageSort(newField, getDefaultResourcePageSortOrder(newField)))
  }

  const toggleOrder = () => {
    onChange(createResourcePageSort(field, order === "asc" ? "desc" : "asc"))
  }

  return (
    <Space>
        <span>Sort:</span>
        <Select
            style={{ width: 130 }}
            options={ResourcePageSortOptions}
            value={field}
            onChange={handleFieldChange}
        />
        <Tooltip title={`${orderLabel} · Click to reverse`}>
            <Button
                aria-label={`Sort order: ${orderLabel}`}
                icon={order === "asc" ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                onClick={toggleOrder}
            />
        </Tooltip>
    </Space>
  )
}

export default ResourcePageSortSelect;
