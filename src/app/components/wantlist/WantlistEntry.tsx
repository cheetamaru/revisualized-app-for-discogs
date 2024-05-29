import { DiscogsWantlistEntry } from '@/app/types/DiscogsWantlistEntry'
import { Button, Card, Divider, Flex, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import React from 'react'
import WantlistEntryCover from './WantlistEntryCover'
import DiscogsLogo from '../discogs/DiscogsLogo'
import { getEntrySrc } from '@/utils/discogsLinks/getEntrySrc'

type Props = {
    entry: DiscogsWantlistEntry
}

const WantlistEntry = ({entry}: Props) => {

  const basicInfo = entry.basic_information

  const enrtyTitle = basicInfo.title;
  const entryArtist = basicInfo.artists[0].name
  const infoForCopy = `${enrtyTitle} — ${entryArtist}`
  const format = basicInfo.formats[0].name
  const qunatity = basicInfo.formats[0].qty
  const descriptions = basicInfo.formats[0].descriptions
  const mainLabel = basicInfo.labels[0].name

  const cardWidth = 210

  return (
    <div>
      <Card
          bordered={false}
          cover={
            <WantlistEntryCover
              width={cardWidth}
              format={format}
              src={basicInfo.cover_image}
              title={enrtyTitle}
              qunatity={qunatity}
              descriptions={descriptions}
            />
          }
          styles={{body: {padding: 10}}}
        >
          <Flex vertical justify="space-between">
            <div>
              <Flex justify="space-between">
                <div style={{width: '70%'}}>
                <Text title={entryArtist} ellipsis>
                    {entryArtist}
                  </Text>
                </div>
                { Boolean(basicInfo.year) && <div><Text type="secondary" italic>{basicInfo.year}</Text></div>}
              </Flex>
              <Title level={5} copyable={{
                text: infoForCopy,
                tooltips: ['', `Copied: ${infoForCopy}`]
              }} ellipsis title={enrtyTitle}
              style={{
                marginBottom: 0,
                overflow: "hidden"
              }}
              >{enrtyTitle}</Title>

              {/* <div>
                <Text strong>Year: </Text> 
                <Text ellipsis>{basicInfo.year}</Text>
              </div> */}
              {/* <div>
                <Text ellipsis title={mainLabel}>
                  <Text strong>Main Label: </Text>
                  {mainLabel}
                </Text>
              </div> */}
            </div>
            <Divider style={{margin: "6px 0"}} />
            <Flex justify="space-between" align="center">
              <div>Rating: {entry.rating}</div>
              <Button
                            type="link"
                            href={getEntrySrc(basicInfo.id)} 
                            target="_blank"
                            icon={<DiscogsLogo size={14} />}
                            style={{ alignSelf: "flex-end", display: "flex", alignItems: "baseline"}}
                            iconPosition="end"
                            
                        >More</Button>
            </Flex>
          </Flex>
      </Card>
    </div>
  )
}

export default WantlistEntry