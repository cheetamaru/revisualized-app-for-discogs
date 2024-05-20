import UserInfo from "@/app/components/user/UserInfo";
import { getUserOnServer } from "./utils/getUserOnServer";
import { getWantlistOnServer } from "./utils/getWantlistOnServer";
import WantlistEntry from "@/app/components/wantlist/WantlistEntry";
import UsernameInput from "@/app/components/user/UsernameInput";
import { Button, Flex } from "antd";

const WantlistPage = async ({params}: { params: { username: string } }) => {
    const { username } = params;

    const user = await getUserOnServer(username);
    const wantlist = await getWantlistOnServer(username)

    return (
        <>
            <UserInfo user={user}/>
            <UsernameInput />
            <Button>Show in Marketplace</Button>
            {/* <pre>
                {JSON.stringify(wantlist, null, 2)}
            </pre> */}
            <Flex wrap gap={10} style={{padding: 10}} justify="center">
                {wantlist?.wants?.map(el => <WantlistEntry key={el.id} entry={el} />)}
            </Flex>
            
        </>
    )
}

export default WantlistPage;