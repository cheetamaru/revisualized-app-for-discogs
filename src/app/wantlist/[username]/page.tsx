import UserInfo from "@/app/components/user/UserInfo";
import { getUserOnServer } from "./getUserOnServer";

const WantlistPage = async ({params}: { params: { username: string } }) => {
    const { username } = params;

    const user = await getUserOnServer(username);

    return (
        <>
            <UserInfo user={user}/>
        </>
    )
}

export default WantlistPage;