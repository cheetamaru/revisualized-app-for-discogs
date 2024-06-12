import { Card, Divider, Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import React from 'react'
import { getEntrySrc } from '@/shared/utils/discogsLinks/getEntrySrc'
import DiscogsLinkButton from '@/shared/ui/components/discogs/DiscogsLinkButton'
import WantlistEntryCover from '@/app/components/wantlist/WantlistEntryCover'
import { ResourceEntryType } from '../../types/ResourceEntryType'
import { ResourceEntryCardDomain } from '../../domain/ResourceEntryCardDomain'
import { resourceEntryCardBodyStyle, resourceEntryCardDividereStyle, resourceEntryCardTitleStyle } from './style/resourceEntryCardStyles'
import style from "./style/resourceEntryCard.module.css"

type Props<T> = {
    entry: T,
    coverImageHeight?: number;
}

const {
  getCardInfoForCopy,
  getCopyMessage,
  defaultImageHeight,
} = ResourceEntryCardDomain;

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

  const infoForCopy = getCardInfoForCopy(entry);

  return (
    <Card
        bordered={false}
        styles={{body: resourceEntryCardBodyStyle}}
        cover={
          <WantlistEntryCover
            width={coverImageHeight}
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
          
          <Flex justify="space-between" align="center">
            <div>Rating: {rating}</div>
            <DiscogsLinkButton
              href={getEntrySrc(resourceId)}
              label="More"
            />
          </Flex>
        </Flex>
    </Card>
  )
}

export default ResourceEntryCard;