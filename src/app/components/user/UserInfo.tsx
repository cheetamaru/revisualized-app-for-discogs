import { DiscogsUser } from "@/app/types/DiscogsUser";
import Image from "next/image";

type Props = {
    user: DiscogsUser
}

const UserInfo = ({user}: Props) => {
    return (
        <>
            <div>USERNAME: { user?.username }</div>
            <Image src={user?.avatar_url} width={100} height={100} alt={user?.username} />
            <a href={user?.uri} target="_blank">Go to Discogs</a>
            <div>Collection: {user.num_collection}</div>
            <div>Wantlist: {user.num_wantlist}</div>
        </>
    )
}

export default UserInfo;