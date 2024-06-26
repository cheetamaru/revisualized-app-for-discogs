import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import Image from 'next/image';
import React from 'react'

const RenderResourceCover: ResourceColumnRenderType = (src: string) => {
  return (
    <Image src={src} alt="lol" height={50} width={50}/>
  )
}

export default RenderResourceCover;
