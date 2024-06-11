import { Card, Divider, Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import React from 'react'
import { getEntrySrc } from '@/shared/utils/discogsLinks/getEntrySrc'
import DiscogsLinkButton from '@/shared/ui/components/discogs/DiscogsLinkButton'
import WantlistEntryCover from '@/app/components/wantlist/WantlistEntryCover'
import { ResourceEntryType } from '../../types/ResourceEntryType'

type Props<T> = {
    entry: T
}

const getCardInfoForCopy = <T extends ResourceEntryType>(entry: T): string => {
    const { title, mainArtistName } = entry;

    return `${title} — ${mainArtistName}`
}

const ResourceEntryCard = <T extends ResourceEntryType,>({entry}: Props<T>) => {
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

  const coverHeight = 210;

  return (
    <div>
      <Card
          bordered={false}
          cover={
            <WantlistEntryCover
              width={coverHeight}
              format={mainFormat}
              src={fullCoverUrl}
              title={title}
            />
          }
          styles={{body: {padding: 10}}}
        >
          <Flex vertical justify="space-between">
            <div>
              <Flex justify="space-between">
                <div style={{width: '70%'}}>
                <Text title={mainArtistName} ellipsis>
                    {mainArtistName}
                  </Text>
                </div>
                { Boolean(year) && <div><Text type="secondary" italic>{year}</Text></div>}
              </Flex>
              <Title level={5} copyable={{
                text: infoForCopy,
                tooltips: ['', `Copied: ${infoForCopy}`]
              }} ellipsis title={title}
              style={{
                marginBottom: 0,
                overflow: "hidden"
              }}
              >{title}</Title>
            </div>
            <Divider style={{margin: "6px 0"}} />
            <Flex justify="space-between" align="center">
              <div>Rating: {rating}</div>
              <DiscogsLinkButton
                href={getEntrySrc(resourceId)}
                label="More"
              />
            </Flex>
          </Flex>
      </Card>
    </div>
  )
}

export default ResourceEntryCard;