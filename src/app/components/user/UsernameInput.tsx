"use client"
import { Button, Input, Space } from "antd";
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from "react";

const UsernameInput = () => {
  const [username, setUsername] = useState("")
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
        />
        <Button type="primary" onClick={handleRedirect}>Submit</Button>
      </Space.Compact>
    </>
  )
}

export default UsernameInput