import { Space } from "antd";
import style from "./style/resourcePageHeader.module.css"
import RoutedUserSearcherWithLink from "@/app/user/ui/components/UserSearcher/RoutedUserSearcherWithLink";
import { UserProfile } from "@/app/user/types/UserProfile";
import UserAvatar from "@/app/user/ui/components/UserAvatar";
import { getDiscogsWantlistUrl } from "@/shared/utils/discogsLinks/getDiscogsWantlistUrl";

type Props = {
    user: UserProfile;
}

const avatarSize = 40;

const ResourcePageHeader = ({ user }: Props) => {
  return (
    <Space align="center">
        <UserAvatar size={avatarSize} user={user} />
        <div className={style.header_input}>
            <RoutedUserSearcherWithLink
              initialValue={user.username}
              url={getDiscogsWantlistUrl(user)}
              routerPathBeforeUsername="/wantlist/"
            />
        </div>
    </Space>
  )
}

export default ResourcePageHeader;
