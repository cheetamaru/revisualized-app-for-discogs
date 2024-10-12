import { Flex } from 'antd'
import React from 'react'
import style from "@/app/wantlist/[username]/ui/style/wantlistEntries.module.css"
import { wantlistEntriesStyle } from "@/app/wantlist/[username]/ui/style/wantlistEntriesStyle"
import ResourceEntryLoadingCard from './ResourceEntryLoadingCard'
import { ResourceEntryCardDomain } from '@/app/resource/domain/ResourceEntryCardDomain'

const { cardContainerStyle } = wantlistEntriesStyle;
const { defaultImageHeight } = ResourceEntryCardDomain;

type Props = {
    coverImageHeight?: number;
    amountOfCards?: number;
}

const ResourcePageCardsLoading = ({ coverImageHeight = defaultImageHeight, amountOfCards = 10 }: Props) => {

    const arrayOfEmpty =  Array(amountOfCards).fill(null).map((_, index) => index)

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
                arrayOfEmpty.map((el) => <ResourceEntryLoadingCard key={el} coverImageHeight={coverImageHeight} />)
            }
        </div>
    </Flex>
    )
}

export default ResourcePageCardsLoading