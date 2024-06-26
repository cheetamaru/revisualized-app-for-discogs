import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import React from 'react'

const RenderResourceYear: ResourceColumnRenderType = (year: string, info) => {
  return (
    <span>{year || '-'}</span>
  )
}

export default RenderResourceYear;
