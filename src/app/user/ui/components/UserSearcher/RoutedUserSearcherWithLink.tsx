"use client"

import UserSearcherWithLink from './UserSearcherWithLink';
import { useRouter } from 'next/navigation';

type Props = {
    routerPathBeforeUsername: string
    initialValue?: string;
    url?: string;
}

const RoutedUserSearcherWithLink = ({initialValue, routerPathBeforeUsername, url}: Props) => {
    const router = useRouter();

    const handleSearch = (username: string) => {
        router.push(routerPathBeforeUsername + username);
    }

    return (
        <UserSearcherWithLink
            initialValue={initialValue}
            onSearch={handleSearch}
            userUrl={url}
        />
    )
}

export default RoutedUserSearcherWithLink