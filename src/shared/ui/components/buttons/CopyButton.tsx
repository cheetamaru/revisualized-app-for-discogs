import { CopyOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

type Props = {
    onClick?: () => void; 
}

const style: React.CSSProperties = {
    color: "gray",
    borderColor: "lightgray",
}

const CopyButton = ({ onClick }: Props) => {
  return (
    <Button
        ghost
        type="dashed"
        style={style}
        icon={<CopyOutlined />}
        onClick={onClick}
    />
  )
}

export default CopyButton