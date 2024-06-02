"use client"
import { Button, Input, InputRef, Space } from "antd";
import { useRouter } from 'next/navigation'
import { ChangeEvent, useRef, useState } from "react";
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import DiscogsLinkButton from "@/shared/ui/components/discogs/DiscogsLinkButton";

type Props = {
  initialValue?: string;
  url?: string;
  isResetable?: boolean;
  forbidGoToDiscogs?: boolean;
}

const UsernameInput = ({ initialValue, url, isResetable, forbidGoToDiscogs }: Props) => {
  const inputRef = useRef<InputRef>(null);
  const [username, setUsername] = useState(initialValue || "")
  const router = useRouter()

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value

    setUsername(newVal)
  }

  const handleRedirect = () => {
    if (!username) {
      return
    }

    router.push("/wantlist/" + username)
  }

  const handleReset = () => {
    setUsername(initialValue || "")
    setTimeout(() => {
      inputRef.current?.blur()
    })
  }

  return (
    <>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          ref={inputRef}
          placeholder="Enter username"
          value={username}
          onChange={handleInput}
          onPressEnter={handleRedirect}
          style={{
              border: 'none',
              borderBottom: "2px solid white",
              borderRadius: 0,
              background: 'transparent',
              boxShadow: "none",
              color: "white",
              padding: 0,
              paddingLeft: 2,
              fontSize: '16px',
          }}
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
          username === initialValue && !forbidGoToDiscogs
            ?
              <DiscogsLinkButton
                type="default"
                href={url}
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
    </>
  )
}

export default UsernameInput