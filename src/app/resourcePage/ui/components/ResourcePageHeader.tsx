import { Space } from "antd";
import style from "./style/resourcePageHeader.module.css"
import RoutedUserSearcherWithLink from "@/app/user/ui/components/UserSearcher/RoutedUserSearcherWithLink";
import { UserProfile } from "@/app/user/types/UserProfile";
import UserAvatar from "@/app/user/ui/components/UserAvatar";
import { DiscogsLisnksDomain } from "@/shared/domain/discogsLinks/DiscogsLinksDomain";
import { ResourcePageTabKey } from "../../domain/ResourcePageTabKey";

type Props = {
    user: UserProfile;
    activeTabKey: ResourcePageTabKey;
}

const {
  getWantlistUrl,
  getCollectionUrl,
} = DiscogsLisnksDomain;

const avatarSize = 40;

const ResourcePageHeader = ({ user, activeTabKey }: Props) => {
  const userResourceUrl = activeTabKey === ResourcePageTabKey.collection
    ? getCollectionUrl(user)
    : getWantlistUrl(user);

  return (
    <Space align="center">
        <UserAvatar size={avatarSize} user={user} />
        <div className={style.header_input}>
            <RoutedUserSearcherWithLink
              initialValue={user.username}
              url={userResourceUrl}
              routerPathBeforeUsername="/collection/"
            />
        </div>
    </Space>
  )
}

export default ResourcePageHeader;
