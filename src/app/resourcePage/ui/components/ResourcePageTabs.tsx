"use client"
import { Tabs } from 'antd'
import { TabsProps } from 'antd/es/tabs'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { ResourcePageTabsDomain } from '../../domain/ResourcePageTabsDomain'
import { ResourcePageTabKey } from '../../domain/ResourcePageTabKey'

type Props = {
    username: string;
    items: TabsProps["items"]
    activeKey: ResourcePageTabKey;
}

const { getRouteByKey } = ResourcePageTabsDomain;

const ResourcePageTabs = ({ items, username, activeKey }: Props) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleChange = (activeKey: string) => {
        const route = getRouteByKey(activeKey, username, searchParams.toString())

        router.push(route)
    }

  return (
    <Tabs
        centered
        size="small"
        onChange={handleChange}
        activeKey={activeKey}
        tabBarStyle={{ marginBottom: 2 }}
        items={items}
    />
  )
}

export default ResourcePageTabs
