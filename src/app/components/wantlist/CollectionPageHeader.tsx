import { DiscogsUser } from "@/app/types/DiscogsUser";
import { Space } from "antd";
import UserAvatar from "../user/UserAvatar";
import UsernameInput from "../user/UsernameInput";
import style from './component.module.css'

type Props = {
    user: DiscogsUser;
}

const CollectionPageHeader = ({ user }: Props) => {
  return (
    <Space align="center">
        <UserAvatar size={40} user={user} />
        <div className={style.header_input}>
            <UsernameInput initialValue={user.username} url={user.uri} isResetable />
        </div>
    </Space>
  )
}

export default CollectionPageHeader