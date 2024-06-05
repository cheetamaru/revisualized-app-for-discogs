"use client"
import React from 'react'
import UserSearcher, { UserSearcherProps } from './UserSearcher'
import UserSearcherActionButton from './UserSearcherActionButton';

type Props = Pick<UserSearcherProps, "initialValue" | "isResetable" | "onSearch"> & {
    userUrl?: string;
  }

const getButtonNode = (userUrl: Props["userUrl"]) => {
  const hasUrl = Boolean(userUrl);

  const buttonRender: UserSearcherProps["buttonRender"] = (canBeReset, handleRedirect) => {
      const isDiscogsLinkShowed = !canBeReset && hasUrl;
      
      return (
          <UserSearcherActionButton
              isLinkShowed={isDiscogsLinkShowed}
              onSearchClick={handleRedirect}
              userUrl={userUrl}
          />
      )
  }

  return buttonRender;
}

const UserSearcherWithLink = ({
    initialValue,
    isResetable,
    userUrl,
    onSearch
}: Props) => {
  const buttonRender = getButtonNode(userUrl)

  return (
    <UserSearcher
        initialValue={initialValue}
        isResetable={isResetable}
        onSearch={onSearch}
        buttonRender={buttonRender}
    />
  )
}

export default UserSearcherWithLink;
