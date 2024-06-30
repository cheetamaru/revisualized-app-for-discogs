"use client"
import { Flex, Select, Space, notification } from "antd";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CopyButton from "@/shared/ui/components/buttons/CopyButton";
import ResourcePageLayoutChoice from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageLayoutChoice";
import { ResourcePageLayout, validateResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import ResourcePageSortSelect from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageSortSelect";
import { ResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";

const sortVariants = {
    rating_desc: "rating_desc",
    rating_asc: "rating_asc"
}

const sortMapper = {
    [sortVariants.rating_desc]: {
        sort: "rating",
        sort_order: "desc"
    },
    [sortVariants.rating_asc]: {
        sort: "rating",
        sort_order: "asc"
    }
}

const sortOptions = [
    {
        value: sortVariants.rating_desc,
        label: <Space><span>Rating</span><FallOutlined /></Space>
    },
    {
        value: sortVariants.rating_asc,
        label: <Space><span>Rating</span><RiseOutlined /></Space>
    }
]

const CollectionControls = () => {
    const [api, contextHolder] = notification.useNotification();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = searchParams.get('sort') || "rating";
    const sort_order = searchParams.get('sort_order') || "desc";
    const layout = validateResourcePageLayout(searchParams.get('layout') || "");

    const sortValue = sort + "_" + sort_order as ResourcePageSort;

    const handleSelect = (val: string) => {
       if (val) {
        const sortVal = sortMapper[val]
        createPageURL(sortVal)
       }
    }

    const changeLayout = (layoutName: ResourcePageLayout) => {
        const params = new URLSearchParams(searchParams);

        params.set('layout', layoutName);
  
        replace(`${pathname}?${params.toString()}`);
    }

    const createPageURL = ({sort, sort_order}: { sort: string; sort_order: string; }) => {
      const params = new URLSearchParams(searchParams);

      params.set('sort', sort.toString());
      params.set('sort_order', sort_order.toString());

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
        <Flex justify="center" align="baseline" gap={25} style={{paddingTop: 10}}>
            <div>
                <ResourcePageSortSelect
                    sortValue={sortValue}
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