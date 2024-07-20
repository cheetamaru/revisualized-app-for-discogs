export const normalizeString = (val: string | number | null | undefined) => {
    if (val === null || val === undefined) {
        return ""
    }

    return String(val)
}
