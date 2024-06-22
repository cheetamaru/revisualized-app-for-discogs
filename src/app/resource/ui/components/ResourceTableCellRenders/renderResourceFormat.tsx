import React from 'react'
import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType';

const renderResourceFormat: ResourceColumnRenderType = (_, info) => {
    return <>
        <span>{info.mainFormatName}</span>
    </>
}

export default renderResourceFormat;
