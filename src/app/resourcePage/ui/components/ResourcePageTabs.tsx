"use client"
import { Tabs } from 'antd'
import { TabsProps } from 'antd/es/tabs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ResourcePageTabsDomain } from '../../domain/ResourcePageTabsDomain'

type Props = {
    username: string;
    items: TabsProps["items"]
}

const { getRouteByKey } = ResourcePageTabsDomain;

const ResourcePageTabs = ({ items, username }: Props) => {
    const router = useRouter()

    const handleChange = (activeKey: string) => {
        const route = getRouteByKey(activeKey, username)

        router.push(route)
    }

  return (
    <Tabs
        centered
        size="small"
        onChange={handleChange}
        tabBarStyle={{ marginBottom: 2 }}
        items={items}
    />
  )
}

export default ResourcePageTabs