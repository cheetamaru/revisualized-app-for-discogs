import { DiscogsWantlistEntry } from '@/app/types/DiscogsWantlistEntry'
import { Button, Card, Divider, Flex, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import React from 'react'
import WantlistEntryCover from './WantlistEntryCover'
import DiscogsLogo from '../discogs/DiscogsLogo'

type Props = {
    entry: DiscogsWantlistEntry
}

const getEntrySrc = (id: string | number) => {
  return "https://www.discogs.com/release/" + id
}

const WantlistEntry = ({entry}: Props) => {

  const basicInfo = entry.basic_information

  const enrtyTitle = basicInfo.title;
  const entryArtist = basicInfo.artists[0].name
  const infoForCopy = `${enrtyTitle} — ${entryArtist}`
  const format = basicInfo.formats[0].name
  const mainLabel = basicInfo.labels[0].name

  return (
    <div>
      <Card
          style={{width: 256}}
          cover={
            <WantlistEntryCover
              size={200}
              format={format}
              src={basicInfo.cover_image}
              title={enrtyTitle}
            />
          }
          styles={{body: {paddingBottom: 10, paddingTop: 10}}}
        >
          <Flex vertical justify="space-between">
            <div>
            <div>
                <Text title={entryArtist} ellipsis>
                    {entryArtist}
                  </Text>
              </div>
              <Title level={4} copyable={{text: infoForCopy}} ellipsis title={enrtyTitle}
              style={{marginBottom: 0}}
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
            <Divider style={{margin: "10px 0"}} />
            <Flex justify="space-between" align="center">
              <div>Rating: {entry.rating}</div>
              <Button
                            type="link"
                            href={getEntrySrc(basicInfo.id)} 
                            target="_blank"
                            icon={<DiscogsLogo size={14} />}
                            style={{ alignSelf: "flex-end", display: "flex", alignItems: "baseline"}}
                            iconPosition="end"
                            
                        >Go to Entry</Button>
            </Flex>
          </Flex>
      </Card>
    </div>
  )
}

export default WantlistEntry