"use client"
import { Flex, notification } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CopyButton from "@/shared/ui/components/buttons/CopyButton";
import ResourcePageLayoutChoice from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageLayoutChoice";
import { ResourcePageLayout, validateResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import ResourcePageSortSelect from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageSortSelect";
import { ResourcePageSort, validateResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";



const CollectionControls = () => {
    const [api, contextHolder] = notification.useNotification();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = validateResourcePageSort(searchParams.get('sort') || "");
    const layout = validateResourcePageLayout(searchParams.get('layout') || "");

    const handleSelect = (sortVal: ResourcePageSort) => {
        createPageURL(sortVal)
    }

    const changeLayout = (layoutName: ResourcePageLayout) => {
        const params = new URLSearchParams(searchParams);

        params.set('layout', layoutName);
  
        replace(`${pathname}?${params.toString()}`);
    }

    const createPageURL = (sortVal: ResourcePageSort) => {
      const params = new URLSearchParams(searchParams);

      params.set('sort', sortVal);

      replace(`${pathname}?${params.toString()}`);
    };

    const handleCopy = () => {
        const toCopy = pathname + "?" + searchParams

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
        <Flex
            justify="center"
            align="baseline"
            gap={25}
            style={{paddingTop: 10}}
        >
            <div>
                <ResourcePageSortSelect
                    sortValue={sort}
                    onChange={handleSelect}
                />
            </div>
            <div>
                <ResourcePageLayoutChoice 
                    layout={layout}
                    onChangeLayout={changeLayout}
                />
            </div>
            <div>
                <CopyButton onClick={handleCopy} />
            </div>
        </Flex>
    </>
  )
}

export default CollectionControls