import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import React from 'react'

const renderResourceYear: ResourceColumnRenderType = (year: string, info) => {
  return (
    <span>{year || '-'}</span>
  )
}

export default renderResourceYear;
