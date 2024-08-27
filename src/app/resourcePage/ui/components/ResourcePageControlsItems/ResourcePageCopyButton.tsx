"use client"
import CopyButton from '@/shared/ui/components/buttons/CopyButton';
import { notification } from 'antd';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const getTextForCopy = ({
    origin,
    pathname,
    searchParams
}: {
    origin: string;
    pathname: string;
    searchParams: string;
}) => {
    if (!searchParams) {
        return origin + pathname
    }

    return origin + pathname + "?" + searchParams
}

const ResourcePageCopyButton = () => {
    const [api, contextHolder] = notification.useNotification();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleCopy = () => {
        const {
            origin
          } = window.location

        const toCopy = getTextForCopy({
            origin,
            pathname,
            searchParams: searchParams.toString()
        })

        navigator.clipboard.writeText(toCopy);

        api.info(
            {
                message: "Copied!",
                description: toCopy,
                placement: "bottom"
            }
        )
    }

    return (
        <>
            {contextHolder}
            <CopyButton onClick={handleCopy} />
        </>
    )
}

export default ResourcePageCopyButton;
