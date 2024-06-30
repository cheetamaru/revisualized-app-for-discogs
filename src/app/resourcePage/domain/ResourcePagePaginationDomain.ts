import { UrlSearchParamGetResult } from "@/shared/types/infrastructure/UrlSearchParamGetResult"

const defaultValues = {
    currentPage: 1,
    perPage: 20
}

const validateCurrentPage = (val: UrlSearchParamGetResult): number => {
    if (!val) {
        return defaultValues.currentPage
    }

    return Number(val)
}

const validatePerPage = (val: UrlSearchParamGetResult): number => {
    if (!val) {
        return defaultValues.perPage
    }

    return Number(val)
}

export const ResourcePagePaginationDomain = {
    validateCurrentPage,
    validatePerPage,
}
