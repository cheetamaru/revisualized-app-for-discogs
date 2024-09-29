"use client"
import DiscogsLinkButton from "@/shared/ui/components/discogs/DiscogsLinkButton";
import { buttonStyle } from "../style/userSearcherStyles";
import UserSearcherSearchButton from "./UserSearcherSearchButton";

type Props = {
    isLinkShowed: boolean;
    userUrl?: string;
    onSearchClick: () => void;
    isLoading: boolean;
}

const UserSearcherActionButton = ({
    isLinkShowed,
    userUrl,
    onSearchClick,
    isLoading,
}: Props) => {
    if (!isLinkShowed) {
        return (
            <UserSearcherSearchButton
                onClick={onSearchClick}
                loading={isLoading}
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