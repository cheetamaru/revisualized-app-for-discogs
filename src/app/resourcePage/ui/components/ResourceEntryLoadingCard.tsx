import { Card } from 'antd'
import React from 'react'
import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import SkeletonImage from 'antd/es/skeleton/Image'
import { resourceEntryCardBodyStyle } from '@/app/resource/ui/components/style/resourceEntryCardStyles'
import { ResourceEntryCardCoverDomain } from '@/app/resource/domain/ResourceEntryCardCoverDomain'

const { getContainerStyle, getCoverGridOptions } = ResourceEntryCardCoverDomain;

type Props = {
  coverImageHeight: number;
}

const ResourceEntryLoadingCard = ({ coverImageHeight }: Props) => {
  const { coverSize } = getCoverGridOptions(coverImageHeight)

  return (
    <Card
        bordered={false}
        styles={{body: resourceEntryCardBodyStyle}}
        cover={
          <div 
              style={{height: coverSize}} 
              className={style.cover_container}
          >
              <SkeletonImage
                active
                rootClassName="loading-card__skeleton-image"
                style={
                  {
                    width: "100%",
                    height: "100%"
                  }
                }
              />
          </div>
        }
        loading={true}
      />
  )
}

export default ResourceEntryLoadingCard