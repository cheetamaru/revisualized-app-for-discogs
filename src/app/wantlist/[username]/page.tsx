import UserInfo from "@/app/components/user/UserInfo";
import { getUserOnServer } from "./utils/getUserOnServer";
import { getWantlistOnServer } from "./utils/getWantlistOnServer";
import WantlistEntry from "@/app/components/wantlist/WantlistEntry";
import UsernameInput from "@/app/components/user/UsernameInput";
import { Button, Flex } from "antd";
import style from "./page.module.css"

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
            <Flex justify="center" style={{padding: "0 5px"}}>
                <div className={style.items_container} style={{width: '900px'}}>
                    {wantlist?.wants?.map(el => <WantlistEntry key={el.id} entry={el} />)}
                </div>
            </Flex>  
        </>
    )
}

export default WantlistPage;