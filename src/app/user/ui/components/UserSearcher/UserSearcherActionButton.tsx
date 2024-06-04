"use client"
import DiscogsLinkButton from "@/shared/ui/components/discogs/DiscogsLinkButton";
import { buttonStyle } from "../style/userSearcherStyles";
import UserSearcherSearchButton from "./UserSearcherSearchButton";

type Props = {
    isDiscogsLinkShowed: boolean;
    userUrl?: string;
    onRedirectClick: () => void;
}

const UserSearcherActionButton = ({
    isDiscogsLinkShowed,
    userUrl,
    onRedirectClick,
}: Props) => {
  return (
    <>
        {
            isDiscogsLinkShowed
                ?
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
                :
                    <UserSearcherSearchButton
                        onClick={onRedirectClick}
                    />
        }
    </>
  )
}

export default UserSearcherActionButton;