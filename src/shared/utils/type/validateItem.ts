import { UrlSearchParamGetResult } from "@/shared/types/infrastructure/UrlSearchParamGetResult";

type Params<T extends Readonly<Record<string, string>>> = {
    valueToValidate: UrlSearchParamGetResult;
    itemCollection: T;
    defaultItem: T[keyof T];
}

export const validateItem = <T extends Record<string, string>>({
    valueToValidate,
    itemCollection,
    defaultItem
}: Params<T>): T[keyof T] => {
    const values = Object.values(itemCollection);
    const val = (valueToValidate ?? "") as T[keyof T]

    if (values.includes(val)) {
        return val;
    }

    return defaultItem;
}
