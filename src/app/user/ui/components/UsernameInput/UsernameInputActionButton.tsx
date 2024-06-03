import DiscogsLinkButton from "@/shared/ui/components/discogs/DiscogsLinkButton";
import { Button } from "antd";
import { buttonStyle } from "../style/usernameInputStyles";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
    isDiscogsLinkShowed: boolean;
    userUrl?: string;
    onRedirectClick: () => void;
}

const UsernameInputActionButton = ({
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
                    <Button
                        onClick={onRedirectClick}
                        style={buttonStyle}
                        icon={<SearchOutlined />}
                        iconPosition="end"
                    >
                        <strong>
                            Search
                        </strong>
                    </Button>
        }
    </>
  )
}

export default UsernameInputActionButton