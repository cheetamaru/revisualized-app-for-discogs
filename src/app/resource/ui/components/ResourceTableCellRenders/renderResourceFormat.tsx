import React from 'react'
import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType';

const RenderResourceFormat: ResourceColumnRenderType = (_, info) => {
    return <>
        <span>{info.mainFormatName}</span>
    </>
}

export default RenderResourceFormat;
