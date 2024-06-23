import React from 'react'
import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import Text from 'antd/es/typography/Text'

const renderResourceInfo: ResourceColumnRenderType = (_, info) => {
    return <>
        <Text
            copyable
            // ellipsis={
            //     {
            //         rows: 2
            //     }
            // }
        >
            {info.title} — {info.mainArtistName}
        </Text>
    </>
}

export default renderResourceInfo;
