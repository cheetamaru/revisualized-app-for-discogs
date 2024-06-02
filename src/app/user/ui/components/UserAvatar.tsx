import Image from 'next/image'
import { Avatar } from 'antd'
import { UserProfile } from '../../types/UserProfile';
import { avatarStyle } from './style/userAvatarStyles';

type Props = {
    user: UserProfile;
    size?: number;
}

const UserAvatar = ({ user, size = 100 }: Props) => {
    return (
        <Avatar
            size={size}
            style={avatarStyle}
            icon={
                <Image
                    src={user.avatarUrl}
                    width={size}
                    height={size}
                    alt={user.username}
                    priority
                    placeholder='blur'
                    blurDataURL='/image_placeholder.jpg'
                />
            }
        />
    )
}

export default UserAvatar