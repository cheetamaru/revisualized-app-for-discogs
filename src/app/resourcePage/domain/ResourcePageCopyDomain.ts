type GetTextForCopyParams = {
    origin: string;
    pathname: string;
    searchParams: string;
}

const getTextForCopy = ({
    origin,
    pathname,
    searchParams
}: GetTextForCopyParams): string => {
    if (!searchParams) {
        return origin + pathname
    }

    return origin + pathname + "?" + searchParams
}

export const ResourcePageCopyDomain = {
    getTextForCopy,
}
