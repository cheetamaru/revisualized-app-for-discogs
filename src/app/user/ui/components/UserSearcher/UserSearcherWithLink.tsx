"use client"
import React from 'react'
import UserSearcher, { UserSearcherProps } from './UserSearcher'
import UserSearcherActionButton from './UserSearcherActionButton';

type Props = Pick<UserSearcherProps, "initialValue" | "isResetable" | "onSearch"> & {
    userUrl?: string;
  }

const UsWithLink = ({
    initialValue,
    isResetable,
    userUrl,
    onSearch
}: Props) => {
    const hasUrl = Boolean(userUrl);

    const buttonNode: UserSearcherProps["buttonNode"] = (canBeReset: boolean, handleRedirect: () => void) => {
        const isDiscogsLinkShowed = !canBeReset && hasUrl;
        
        return (
            <UserSearcherActionButton
                isDiscogsLinkShowed={isDiscogsLinkShowed}
                onRedirectClick={handleRedirect}
                userUrl={userUrl}
            />
        )
    }

  return (
    <UserSearcher
        initialValue={initialValue}
        isResetable={isResetable}
        onSearch={onSearch}
        buttonNode={buttonNode}
    />
  )
}

export default UsWithLink