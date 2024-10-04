import { Card } from 'antd'
import React from 'react'
import style from "./style/resourceEntryCard.module.css"
import SkeletonImage from 'antd/es/skeleton/Image'
import { resourceEntryCardBodyStyle } from '@/app/resource/ui/components/style/resourceEntryCardStyles'
import { ResourceEntryCardCoverDomain } from '@/app/resource/domain/ResourceEntryCardCoverDomain'

const { getContainerStyle } = ResourceEntryCardCoverDomain;

const ResourceEntryLoadingCard = () => {
  return (
    <Card
        bordered={false}
        styles={{body: resourceEntryCardBodyStyle}}
        cover={
          <div 
            style={getContainerStyle({ onePart: 21, coverSize: 147 })} 
            className={style.cover_container}
        >
            <SkeletonImage active />
        </div>
        }
        loading={true}
      />
  )
}

export default ResourceEntryLoadingCard