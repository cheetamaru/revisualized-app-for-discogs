import Image from 'next/image'
import React from 'react'

type Props = {
    size?: number
}

const DiscogsLogo = ({size}: Props) => {
    const internalSize = size || 14

  return (
    <Image src="/pics/arrow.png" width={internalSize} height={internalSize} alt="discogs-logo" />
  )
}

export default DiscogsLogo