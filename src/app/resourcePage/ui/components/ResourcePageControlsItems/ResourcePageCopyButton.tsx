"use client"
import { ResourcePageCopyDomain } from '@/app/resourcePage/domain/ResourcePageCopyDomain';
import CopyButton from '@/shared/ui/components/buttons/CopyButton';
import { notification } from 'antd';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const { getTextForCopy } = ResourcePageCopyDomain;

const ResourcePageCopyButton = () => {
    const [api, contextHolder] = notification.useNotification();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleCopy = () => {
        const toCopy = getTextForCopy({
            origin: window.location.origin,
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
