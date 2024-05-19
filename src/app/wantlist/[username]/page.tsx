import UserInfo from "@/app/components/user/UserInfo";
import { getUserOnServer } from "./getUserOnServer";
import { getWantlistOnServer } from "./getWantlistOnServer";
import WantlistEntry from "@/app/components/wantlist/WantlistEntry";
import UsernameInput from "@/app/components/user/UsernameInput";

const WantlistPage = async ({params}: { params: { username: string } }) => {
    const { username } = params;

    const user = await getUserOnServer(username);
    const wantlist = await getWantlistOnServer(username)

    return (
        <>
            <UserInfo user={user}/>
            <UsernameInput />
            {wantlist?.wants?.map(el => <WantlistEntry key={el.id} entry={el} />)}
        </>
    )
}

export default WantlistPage;