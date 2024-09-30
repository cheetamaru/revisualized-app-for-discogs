"use client"
import { Button } from 'antd'
import { buttonStyle } from '../style/userSearcherStyles';
import { SearchOutlined } from '@ant-design/icons';

type Props = {
    onClick: () => void;
    loading?: boolean;
}

const UserSearcherSearchButton = ({ onClick, loading }: Props) => {
  return (
    <Button
        onClick={onClick}
        style={buttonStyle}
        icon={<SearchOutlined />}
        loading={loading}
        iconPosition="end"
    >
        <strong>
            Search
        </strong>
    </Button>
  )
}

export default UserSearcherSearchButton;