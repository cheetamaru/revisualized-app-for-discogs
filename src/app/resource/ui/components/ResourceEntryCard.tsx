import { Card, Divider, Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import React from 'react'
import ResourceEntryActions from './ResourceEntryActions'
import { ResourceEntryType } from '../../types/ResourceEntryType'
import { ResourceEntryCardDomain } from '../../domain/ResourceEntryCardDomain'
import { resourceEntryCardBodyStyle, resourceEntryCardDividereStyle, resourceEntryCardTitleStyle } from './style/resourceEntryCardStyles'
import style from "./style/resourceEntryCard.module.css"
import ResourceEntryCardCover from './ResourceEntryCardCover/ResourceEntryCardCover'
import { ResourceDomain } from '../../domain/ResourceDomain'
import { DiscogsLisnksDomain } from '@/shared/domain/discogsLinks/DiscogsLinksDomain'

type Props<T> = {
    entry: T,
    coverImageHeight?: number;
}

const {
  defaultImageHeight,
} = ResourceEntryCardDomain;

const {
  getEntrySrc,
} = DiscogsLisnksDomain;

const {
  getInfoForCopy,
  getCopyMessage,
} = ResourceDomain;

const ResourceEntryCard = <T extends ResourceEntryType,>({
  entry,
  coverImageHeight = defaultImageHeight,
}: Props<T>) => {
  const {
    resourceId,
    title,
    rating,
    mainArtistName,
    mainFormat,
    fullCoverUrl,
    year,
  } = entry;

  const infoForCopy = getInfoForCopy(entry);

  return (
    <Card
        bordered={false}
        styles={{body: resourceEntryCardBodyStyle}}
        cover={
          <ResourceEntryCardCover
            coverImageHeight={coverImageHeight}
            format={mainFormat}
            src={fullCoverUrl}
            title={title}
          />
        }
      >
        <Flex vertical justify="space-between">
          <div>
            <Flex justify="space-between">
              <div className={style.artist_name}>
                <Text title={mainArtistName} ellipsis>
                  {mainArtistName}
                </Text>
              </div>
              { Boolean(year) && <div><Text type="secondary" italic>{year}</Text></div>}
            </Flex>
            <Title
              level={5}
              copyable={{
                text: infoForCopy,
                tooltips: ['', getCopyMessage(infoForCopy)]
              }}
              ellipsis
              title={title}
              style={resourceEntryCardTitleStyle}
            >
              {title}
            </Title>
          </div>

          <Divider style={resourceEntryCardDividereStyle} />
          
          <ResourceEntryActions entry={entry} href={getEntrySrc(resourceId)} />
        </Flex>
    </Card>
  )
}

export default ResourceEntryCard;
