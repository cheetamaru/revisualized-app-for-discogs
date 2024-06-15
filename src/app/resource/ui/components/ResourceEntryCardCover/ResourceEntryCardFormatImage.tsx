import Image from 'next/image';
import React from 'react'
import style from "@/app/resource/ui/components/style/resourceEntryCard.module.css"
import { resourceEntryCardStyle } from '../style/resourceEntryCardStyles';

type Props = {
  formatImg?: string;
  coverSize: number;
  formatName: string;
}

const { coverFormatTextInfoStyle } = resourceEntryCardStyle;

const ResourceEntryCardFormatImage = ({
  formatImg,
  coverSize,
  formatName,

}: Props) => {
  if (formatImg) {
    return (
      <Image
        height={coverSize}
        width={coverSize}
        src={formatImg}
        alt={formatImg}
        className={style.cover_format}
      />
    )
  }

  return (
    <div
        style={{
            height: coverSize,
            width: coverSize,
            ...coverFormatTextInfoStyle,
        }}
        className={style.cover_format}
    >
        {formatName}
    </div>
  )
}

export default ResourceEntryCardFormatImage