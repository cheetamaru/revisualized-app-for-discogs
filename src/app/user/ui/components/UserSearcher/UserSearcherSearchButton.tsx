"use client"
import { Button } from 'antd'
import { buttonStyle } from '../style/userSearcherStyles';
import { SearchOutlined } from '@ant-design/icons';

type Props = {
    onClick: () => void;
}

const UserSearcherSearchButton = ({ onClick }: Props) => {
  return (
    <Button
        onClick={onClick}
        style={buttonStyle}
        icon={<SearchOutlined />}
        iconPosition="end"
    >
        <strong>
            Search
        </strong>
    </Button>
  )
}

export default UserSearcherSearchButton;