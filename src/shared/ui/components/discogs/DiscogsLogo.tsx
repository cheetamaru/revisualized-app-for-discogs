import Image from 'next/image'
import React from 'react'

type Props = {
    size?: number
}

const DiscogsLogo = ({size}: Props) => {
    const internalSize = size || 14

    const src = process.env.NEXT_PUBLIC_DISCOGS_LOGO_SRC

    if (!src) {
        throw new Error("Discogs logo src not found!")
    }

  return (
    <Image src={src} width={internalSize} height={internalSize} alt="discogs-logo" />
  )
}

export default DiscogsLogo