import { Flex } from 'antd'
import React from 'react'
import style from "@/app/resource/ui/components/style/resourceEntries.module.css"
import { resourceEntriesStyle } from "@/app/resource/ui/components/style/resourceEntriesStyle"
import ResourceEntryLoadingCard from './ResourceEntryLoadingCard'
import { ResourceEntryCardDomain } from '@/app/resource/domain/ResourceEntryCardDomain'

const { cardContainerStyle } = resourceEntriesStyle;
const { defaultImageHeight, defaultLoadingCardAmount } = ResourceEntryCardDomain;

type Props = {
    coverImageHeight?: number;
    amountOfCards?: number;
}

const ResourcePageCardsLoading = ({
        coverImageHeight = defaultImageHeight,
        amountOfCards = defaultLoadingCardAmount
    }: Props) => {

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
