import { DiscogsUser } from '@/app/types/DiscogsUser'
import { Avatar } from 'antd'
import Image from 'next/image'
import React from 'react'

type Props = {
    user: DiscogsUser;
    size?: number;
}

const UserAvatar = ({user, size}: Props) => {
    const internalSize = size || 100
    return (
        <>
            <Avatar
                size={internalSize}
                style={{border: "solid 1px white"}}
                icon={
                    <Image src={user?.avatar_url}
                        width={internalSize}
                        height={internalSize}
                        alt={user?.username}
                        placeholder='blur'
                        blurDataURL='/image_placeholder.jpg'
                        priority
                    />
                }
            /> 
        </> 
    )
}

export default UserAvatar