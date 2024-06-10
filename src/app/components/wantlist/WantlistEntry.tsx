import { DiscogsWantlistEntry } from '@/shared/types/discogs/wantlist/DiscogsWantlistEntry'
import { Button, Card, Divider, Flex, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import React from 'react'
import WantlistEntryCover from './WantlistEntryCover'
import { getEntrySrc } from '@/shared/utils/discogsLinks/getEntrySrc'
import DiscogsLinkButton from '@/shared/ui/components/discogs/DiscogsLinkButton'
import { WantlistEntryType } from '@/app/wantlist/[username]/types/WantlistEntryType'

type Props = {
    entry: WantlistEntryType
}

const WantlistEntry = ({entry}: Props) => {

  const {
    resourceId,
    title,
    rating,
    mainArtistName,
    mainFormatName,
    mainFormat,
    fullCoverUrl,
    year,
  } = entry;

  const infoForCopy = `${title} — ${mainArtistName}`

  const cardWidth = 210

  return (
    <div>
      <Card
          bordered={false}
          cover={
            <WantlistEntryCover
              width={cardWidth}
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

export default WantlistEntry