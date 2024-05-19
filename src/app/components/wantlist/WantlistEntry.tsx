import { DiscogsWantlistEntry } from '@/app/types/DiscogsWantlistEntry'
import React from 'react'

type Props = {
    entry: DiscogsWantlistEntry
}

const getEntrySrc = (id: string | number) => {
  return "https://www.discogs.com/release/" + id
}

const WantlistEntry = ({entry}: Props) => {

  const basicInfo = entry.basic_information

  return (
    <div>
      <div><span>{basicInfo.title} ({basicInfo.year}) - {basicInfo.artists[0].name}</span></div>
      <div>{basicInfo.formats.map(el => <div key={el.name}>{JSON.stringify(el, null, 2)}</div>)}</div>
      <div>Rating: {entry.rating}</div>
      <a href={getEntrySrc(basicInfo.id)} target='_blank'>Go To Discogs Entry</a>
      <hr />
    </div>
  )
}

export default WantlistEntry