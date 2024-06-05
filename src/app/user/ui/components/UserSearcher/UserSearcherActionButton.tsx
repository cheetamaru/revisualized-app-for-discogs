"use client"
import DiscogsLinkButton from "@/shared/ui/components/discogs/DiscogsLinkButton";
import { buttonStyle } from "../style/userSearcherStyles";
import UserSearcherSearchButton from "./UserSearcherSearchButton";

type Props = {
    isLinkShowed: boolean;
    userUrl?: string;
    onSearchClick: () => void;
}

const UserSearcherActionButton = ({
    isLinkShowed,
    userUrl,
    onSearchClick,
}: Props) => {
    if (!isLinkShowed) {
        return (
            <UserSearcherSearchButton
                onClick={onSearchClick}
            />
        )
    }

    return (
        <DiscogsLinkButton
            type="default"
            href={userUrl}
            style={buttonStyle}
            label={
                <strong>
                    Discogs
                </strong>
            }
        />
    )
}

export default UserSearcherActionButton;