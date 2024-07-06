import { ResourcePageQueryParam } from "../domain/ResourcePageQueryParam";

export type ResourcePageSearchParams = {
    [ResourcePageQueryParam.page]?: string;
    [ResourcePageQueryParam.perPage]?: string;
    [ResourcePageQueryParam.sort]?: string;
    [ResourcePageQueryParam.layout]?: string;
}
