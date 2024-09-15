import { Button, GetProps } from "antd";
import DiscogsLogo from "./DiscogsLogo";

type Props = {
  href?: string;
  label: string | React.ReactNode;
  style?: React.CSSProperties;
  type?: GetProps<typeof Button>["type"];
}

const defaultStyles: React.CSSProperties = {
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center"
}

const DiscogsLinkButton = ({
    href,
    label,
    style = defaultStyles,
    type = "link"
  }: Props) => {

  return (
    <Button
        type={type}
        href={href} 
        target="_blank"
        icon={<DiscogsLogo size={16} />}
        style={style}
        iconPosition="end"
    >
        {label}
    </Button>
  )
}

export default DiscogsLinkButton