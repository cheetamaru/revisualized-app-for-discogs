import { RedoOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { resetButtonStyle } from "../style/usernameInputStyles";

type Props = {
    onClick: () => void; 
}

const UsernameInputResetButton = ({ onClick }: Props) => {
  return (
    <Button
        type="text"
        size="small"
        onClick={onClick}
        icon={<RedoOutlined />}
        style={resetButtonStyle}
    />
  )
}

export default UsernameInputResetButton