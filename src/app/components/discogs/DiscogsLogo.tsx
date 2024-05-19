import Image from 'next/image'
import React from 'react'

type Props = {
    size?: number
}

const DiscogsLogo = ({size}: Props) => {
    const internalSize = size || 14

    const src = process.env.DISCOGS_LOGO_SRC

    if (!src) {
        throw new Error("Discogs logo not found!")
    }

  return (
    <Image src={src} width={internalSize} height={internalSize} alt="discogs-logo" />
  )
}

export default DiscogsLogo