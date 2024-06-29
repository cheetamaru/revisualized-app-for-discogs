"use client"
import { AppstoreOutlined, BarsOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'
import { ResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout"
import React from 'react'

type Props = {
    layout: ResourcePageLayout;
    onChangeLayout: (layout: ResourcePageLayout) => void;
}

const getStyle = (
    chosenLayout: ResourcePageLayout,
    layoutToChoose: ResourcePageLayout
): React.CSSProperties => {
    return {
        background: chosenLayout === layoutToChoose ? "lightgray" : undefined
    }
}

const ResourcePageLayoutChoice = ({
    layout,
    onChangeLayout,
}: Props) => {
  return (
    <Space size={2}>
        <Tooltip title="Tiles layout">
            <Button
                icon={<AppstoreOutlined />}
                type="text"
                size="small"
                style={getStyle(layout, ResourcePageLayout.tiles)}
                onClick={() => onChangeLayout(ResourcePageLayout.tiles)}
            />
        </Tooltip>
        <Tooltip title="Table with image layout">
            <Button
                icon={<BarsOutlined style={{fontSize: 16}} />}
                type="text"
                size="small"
                style={getStyle(layout, ResourcePageLayout.tableFull)}
                onClick={() => onChangeLayout(ResourcePageLayout.tableFull)}
            />
        </Tooltip>
        <Tooltip title="Table without image layout">
            <Button
                icon={<MenuOutlined />}
                type="text"
                size="small"
                style={getStyle(layout, ResourcePageLayout.tableMin)}
                onClick={() => onChangeLayout(ResourcePageLayout.tableMin)}
            />
        </Tooltip>
    </Space>
  )
}

export default ResourcePageLayoutChoice;
