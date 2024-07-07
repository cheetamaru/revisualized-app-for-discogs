import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import Image from 'next/image';
import React from 'react'

const RenderResourceCover: ResourceColumnRenderType = (_, info) => {
  const size = 50;

  return (
    <Image
      src={info.thumbCoverUrl}
      alt={info.title}
      height={size}
      width={size}/>
  )
}

export default RenderResourceCover;
