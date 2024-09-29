"use client"
import { ConfigProvider, Input, InputRef, Space } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { inputStyle, spaceStyle } from "../style/userSearcherStyles";
import UserSearcherResetButton from "./UserSearcherResetButton";
import UserSearcherSearchButton from "./UserSearcherSearchButton";

export type UserSearcherProps = {
  initialValue?: string;
  isResetable?: boolean;
  onSearch: (username: string) => void;
  buttonRender?: (canBeReset: boolean, handleRedirect: () => void, isLoading: boolean) => React.ReactNode;
}

const UserSearcher = ({
  initialValue = "",
  isResetable,
  onSearch,
  buttonRender
}: UserSearcherProps) => {
    const inputRef = useRef<InputRef>(null);
    const [username, setUsername] = useState(initialValue);
    const [isLoading, setLoading] = useState(false)

    const canBeReset = username !== initialValue
    const isResetButtonShowed = isResetable && canBeReset
  
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value)
    }
  
    const handleRedirect = () => {
      if (!username) {
        return
      }
  
      setLoading(true);
      onSearch(username);
    }
  
    const handleReset = () => {
      setUsername(initialValue)
      setTimeout(() => {
        inputRef.current?.blur()
      })
    }

    const getButton = () => {
      const externalButton = buttonRender?.(canBeReset, handleRedirect, isLoading)

      return externalButton ??
        <UserSearcherSearchButton
          onClick={handleRedirect}
          loading={isLoading}
        />
    }
  
    return (
        <Space.Compact style={spaceStyle}>
          <ConfigProvider
            theme={{
              token: {
                colorTextPlaceholder: "rgba(255, 255, 255, 0.5)"
              },
            }}
          >
            <Input
              ref={inputRef}
              value={username}
              onChange={handleInput}
              onPressEnter={handleRedirect}
              style={inputStyle}
              placeholder="Discogs Username"
              autoComplete="on"
              name="username-input"
              suffix={
                <>
                  {
                    isResetButtonShowed &&
                      <UserSearcherResetButton
                        onClick={handleReset}
                      />
                  }
                </>
                
              }
            />
            {
              getButton()
            }
          </ConfigProvider>
        </Space.Compact>
    )
  }

  export default UserSearcher;