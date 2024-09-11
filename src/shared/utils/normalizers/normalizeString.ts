export const normalizeString = (val: string | number | null | undefined) => {
    return String(val ?? "")
}
