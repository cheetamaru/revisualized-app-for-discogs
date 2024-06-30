"use client"
import { Flex } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ResourcePageLayoutChoice from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageLayoutChoice";
import { ResourcePageLayout, validateResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import ResourcePageSortSelect from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageSortSelect";
import { ResourcePageSort, validateResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";
import ResourcePageCopyButton from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageCopyButton";

const ResourcePageControls = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = validateResourcePageSort(searchParams.get('sort'));
    const layout = validateResourcePageLayout(searchParams.get('layout'));

    const changeLayoutParams = (layoutName: ResourcePageLayout) => {
        const params = new URLSearchParams(searchParams);

        params.set('layout', layoutName);
  
        replace(`${pathname}?${params.toString()}`);
    }

    const changeSortParams = (sortVal: ResourcePageSort) => {
      const params = new URLSearchParams(searchParams);

      params.set('sort', sortVal);

      replace(`${pathname}?${params.toString()}`);
    };

  return (
    <>
        <Flex
            justify="center"
            align="baseline"
            gap={25}
            style={{paddingTop: 10}}
        >
            <div>
                <ResourcePageSortSelect
                    sortValue={sort}
                    onChange={changeSortParams}
                />
            </div>
            <div>
                <ResourcePageLayoutChoice 
                    layout={layout}
                    onChangeLayout={changeLayoutParams}
                />
            </div>
            <div>
                <ResourcePageCopyButton />
            </div>
        </Flex>
    </>
  )
}

export default ResourcePageControls;
