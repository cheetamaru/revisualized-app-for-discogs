"use client"
import { Button, Input, InputRef, Space } from "antd";
import { useRouter } from 'next/navigation'
import { ChangeEvent, useRef, useState } from "react";
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { UserDomain } from "../../domain/UserDomain";
import DiscogsLinkButton from "@/shared/ui/components/discogs/DiscogsLinkButton";

type Props = {
  initialValue?: string;
  userUrl?: string;
  isResetable?: boolean;
}

const { getUsernameInputPushPath } = UserDomain;

const spaceStyle: React.CSSProperties = {
    width: '100%'
}

const inputStyle: React.CSSProperties = {
    border: 'none',
    borderBottom: "2px solid white",
    borderRadius: 0,
    background: 'transparent',
    boxShadow: "none",
    color: "white",
    padding: 0,
    paddingLeft: 2,
    fontSize: '16px',
}

const UsernameInput = ({ initialValue = "", userUrl, isResetable }: Props) => {
  const inputRef = useRef<InputRef>(null);
  const router = useRouter();

  const [username, setUsername] = useState(initialValue);

  const hasUrl = Boolean(userUrl);
  const isDiscogsLinkShowed = username === initialValue && hasUrl

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleRedirect = () => {
    if (!username) {
      return
    }

    router.push(getUsernameInputPushPath(username))
  }

  const handleReset = () => {
    setUsername(initialValue)
    setTimeout(() => {
      inputRef.current?.blur()
    })
  }

  return (
      <Space.Compact style={spaceStyle}>
        <Input
          ref={inputRef}
          value={username}
          onChange={handleInput}
          onPressEnter={handleRedirect}
          placeholder="Enter username"
          style={inputStyle}
          autoComplete="on"
          name="username-input"
          suffix={
            <>
              {username === initialValue
              ||
                isResetable &&
                <Button onClick={handleReset} icon={<RedoOutlined />} type="text" size="small" style={{
                    color: 'white', paddingRight: 6,
                  }}
                />}
            </>
          }
        />
        {
          isDiscogsLinkShowed
            ?
              <DiscogsLinkButton
                type="default"
                href={userUrl}
                style={{
                  transition: "all 0.2s",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  width: 150,
                  height: 32,
                }}
                label={<strong>Discogs</strong>}
              />
            :
              <Button
                onClick={handleRedirect}
                style={{
                  transition: "all 0.2s",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  width: 150,
                  height: 32,
                }}
                icon={<SearchOutlined />}
                iconPosition="end"
              >
                  <strong>Search</strong>
              </Button>
        }
      </Space.Compact>
  )
}

export default UsernameInput