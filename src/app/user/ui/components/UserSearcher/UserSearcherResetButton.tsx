"use client"
import { RedoOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { resetButtonStyle } from "../style/userSearcherStyles";

type Props = {
    onClick: () => void; 
}

const UsernSearcherResetButton = ({ onClick }: Props) => {
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

export default UsernSearcherResetButton;