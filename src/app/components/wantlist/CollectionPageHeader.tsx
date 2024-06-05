import { DiscogsProfile } from "@/shared/types/discogs/profile/DiscogsProfile";
import { Space } from "antd";
import UserAvatar from "../user/UserAvatar";
import style from './component.module.css'
import RoutedUserSearcherWithLink from "@/app/user/ui/components/UserSearcher/RoutedUserSearcherWithLink";

type Props = {
    user: DiscogsProfile;
}

const CollectionPageHeader = ({ user }: Props) => {
  return (
    <Space align="center">
        <UserAvatar size={40} user={user} />
        <div className={style.header_input}>
            <RoutedUserSearcherWithLink
              initialValue={user.username}
              url={user.uri}
              routerPathBeforeUsername="/wantlist/"
            />
        </div>
    </Space>
  )
}

export default CollectionPageHeader