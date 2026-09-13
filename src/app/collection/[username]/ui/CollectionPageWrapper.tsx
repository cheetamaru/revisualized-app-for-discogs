import { Suspense } from "react";
import { ResourcePageTabKey } from "@/app/resourcePage/domain/ResourcePageTabKey";
import { ResourcePageSearchParams } from "@/app/resourcePage/types/ResourcePageSearchParams";
import ResourcePageLayout from "@/app/resourcePage/ui/layouts/ResourcePageLayout";
import { getResourcePageParams } from "@/app/resourcePage/utils/getResourcePageParams";
import ResourceEntries from "@/app/resource/ui/components/ResourceEntries";
import CollectionEntriesWrapper from "./CollectionEntriesWrapper";

type Props = {
    params: { username: string };
    searchParams?: ResourcePageSearchParams;
};

const getSuspenseKey = (...args: string[]) => args.join("|");

const CollectionPageWrapper = ({ params, searchParams }: Props) => {
    const { currentPage, perPage, sort, layout } = getResourcePageParams(searchParams);
    const suspenseKey = getSuspenseKey(
        currentPage.toString(),
        perPage.toString(),
        sort.toString(),
        layout.toString(),
    );

    return (
        <ResourcePageLayout params={params} searchParams={searchParams} activeTabKey={ResourcePageTabKey.collection}>
            <Suspense
                key={suspenseKey}
                fallback={<ResourceEntries layout={layout} isLoading entries={[]} />}
            >
                <CollectionEntriesWrapper params={params} searchParams={searchParams} />
            </Suspense>
        </ResourcePageLayout>
    );
};

export default CollectionPageWrapper;
