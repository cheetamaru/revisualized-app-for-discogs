"use client"

import { useRouter } from "next/navigation"
import UserSearcher from "./UserSearcher"

type Props = {
    routerPathBeforeUsername: string
    initialValue?: string;
}

const UserSearcherRouted = ({initialValue, routerPathBeforeUsername}: Props) => {
    const router = useRouter();

    const handleSearch = (username: string) => {
        router.push(routerPathBeforeUsername + username);
    }

    return (
        <UserSearcher
            initialValue={initialValue}
            onSearch={handleSearch}
        />
    )
}

export default UserSearcherRouted;
