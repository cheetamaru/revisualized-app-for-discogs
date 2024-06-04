"use client"
import { Input, InputRef, Space } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { inputStyle, spaceStyle } from "../style/userSearcherStyles";
import UserSearcherResetButton from "./UserSearcherResetButton";
import UserSearcherSearchButton from "./UserSearcherSearchButton";

export type UserSearcherProps = {
  initialValue?: string;
  isResetable?: boolean;
  onSearch: (username: string) => void;
  buttonNode?: (canBeReset: boolean, handleRedirect: () => void) => React.ReactNode;
}

const UserSearcher = ({ initialValue = "", isResetable, onSearch, buttonNode }: UserSearcherProps) => {
    const inputRef = useRef<InputRef>(null);
  
    const [username, setUsername] = useState(initialValue);

    const canBeReset = username !== initialValue

    const isResetButtonShowed = canBeReset && isResetable
  
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value)
    }
  
    const handleRedirect = () => {
      if (!username) {
        return
      }
  
      onSearch(username);
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
                <UserSearcherResetButton
                  onClick={handleReset}
                />}
              </>
              
            }
          />
          {
            buttonNode?.(canBeReset, handleRedirect) ??
              <UserSearcherSearchButton onClick={handleRedirect} />
          }
        </Space.Compact>
    )
  }

  export default UserSearcher;