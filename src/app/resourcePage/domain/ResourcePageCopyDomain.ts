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

export const ResourcePageCopyDomain = {
    getTextForCopy,
}
