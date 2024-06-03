"use client"
import { Input, InputRef, Space } from "antd";
// import { useRouter } from 'next/navigation'
import { ChangeEvent, useRef, useState } from "react";
import { inputStyle, spaceStyle } from "../style/usernameInputStyles";
import UsernameInputResetButton from "./UsernameInputResetButton";
import UsernameInputActionButton from "./UsernameInputActionButton";

type Props = {
  initialValue?: string;
  userUrl?: string;
  isResetable?: boolean;
  onSearch: (username: string) => void;
}

const UsernameInput = ({ initialValue = "", userUrl, isResetable, onSearch }: Props) => {
  const inputRef = useRef<InputRef>(null);
  // const router = useRouter();

  const [username, setUsername] = useState(initialValue);

  const hasUrl = Boolean(userUrl);
  const isDiscogsLinkShowed = username === initialValue && hasUrl
  const isResetButtonShowed = isResetable && username !== initialValue

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleRedirect = () => {
    if (!username) {
      return
    }

    onSearch(username);
    // router.push(getUsernameInputPushPath(username))
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
          style={inputStyle}
          placeholder="Enter username"
          autoComplete="on"
          name="username-input"
          suffix={
            <>
            {isResetButtonShowed &&
              <UsernameInputResetButton
                onClick={handleReset}
              />}
            </>
            
          }
        />
        <UsernameInputActionButton
          isDiscogsLinkShowed={isDiscogsLinkShowed}
          userUrl={userUrl}
          onRedirectClick={handleRedirect}
        />
      </Space.Compact>
  )
}

export default UsernameInput