"use client"
import React from 'react'
import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import Paragraph from 'antd/es/typography/Paragraph'
import { ResourceDomain } from '@/app/resource/domain/ResourceDomain';
import { useRouter } from 'next/navigation';
import style from "../style/resourceTable.module.css"
import { DiscogsLisnksDomain } from '@/shared/domain/discogsLinks/DiscogsLinksDomain';

const {
    getInfoForCopy,
    getCopyMessage,
  } = ResourceDomain;

const {
    getEntrySrc,
} = DiscogsLisnksDomain;

const RenderResourceInfo: ResourceColumnRenderType = (_, info) => {
    const infoForCopy = getInfoForCopy(info);
    const router = useRouter();

    const handleClick = () => {
        router.push(getEntrySrc(info.resourceId));
    }
    
    return <>
        <Paragraph
            copyable={{
                text: infoForCopy,
                tooltips: ['', getCopyMessage(infoForCopy)]
              }}
            ellipsis={{
                rows: 2
            }}
            className={style.info}
            onClick={handleClick}
        >
            {info.title} — {info.mainArtistName}
        </Paragraph>
    </>
}

export default RenderResourceInfo;
