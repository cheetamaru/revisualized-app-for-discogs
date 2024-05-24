"use client"
import { Button, Input, Space } from "antd";
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from "react";
import DiscogsLogo from "../discogs/DiscogsLogo";

type Props = {
  initialValue?: string;
  url?: string;
}

const UsernameInput = ({ initialValue, url }: Props) => {
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

  return (
    <>
      <Space.Compact style={{ width: '100%' }}>
        <Input
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
        />
        {
          username === initialValue
            ?
            <Button
              href={url}
              target="_blank"
              icon={<DiscogsLogo size={14} />}
              style={{
                transition: "all 0.2s",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              iconPosition="end"
            >
                <strong>Discogs</strong>
            </Button>

            : 
            
            <Button
              onClick={handleRedirect}
              style={{
                transition: "all 0.2s",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
                <strong>Search</strong>
            </Button>

        }

      </Space.Compact>
    </>
  )
}

export default UsernameInput