import { Flex } from 'antd'
import React from 'react'
import style from "@/app/wantlist/[username]/ui/style/wantlistEntries.module.css"
import { wantlistEntriesStyle } from "@/app/wantlist/[username]/ui/style/wantlistEntriesStyle"
import ResourceEntryLoadingCard from './ResourceEntryLoadingCard'

const { cardContainerStyle } = wantlistEntriesStyle;

const ResourcePageCardsLoading = () => {

    const arrayOfEmpty =  Array(10).fill(null).map((_, index) => index)

  return (
    <Flex
        justify="center"
        className={style.container}
    >
        <div
            className={style.items_container}
            style={cardContainerStyle}
        >
            {
                arrayOfEmpty.map((el) => <ResourceEntryLoadingCard key={el} />)
            }
        </div>
    </Flex>
  )
}

export default ResourcePageCardsLoading