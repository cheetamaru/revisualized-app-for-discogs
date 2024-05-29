"use client"
import { Button, Flex, Select, Space } from "antd";
import { AppstoreOutlined, BarsOutlined, FallOutlined, MenuOutlined, RiseOutlined } from "@ant-design/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = searchParams.get('sort') || "rating";
    const sort_order = searchParams.get('sort_order') || "desc";

    const sortValue = sort + "_" + sort_order;

    const handleSelect = (val: string) => {
       if (val) {
        const sortVal = sortMapper[val]
        createPageURL(sortVal)
       }
    }

    const changeLayout = (layoutName: string) => {
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

  return (
    <>
        <Flex justify="center" align="baseline" gap={30} style={{paddingTop: 10}}>
            <div>
                <Space>
                    <span>Sort: </span>
                    <Select
                        style={{
                            width: 150,
                        }}
                        options={sortOptions}
                        placeholder="Select sorting"
                        value={sortValue}
                        onChange={handleSelect}
                    />
                </Space>
            </div>
            <div>
                <Space size={2}>
                    <Button
                        icon={<AppstoreOutlined />}
                        type="text"
                        size="small"
                        onClick={() => changeLayout("tiles")}
                    />
                    <Button
                        icon={<BarsOutlined />}
                        type="text"
                        size="middle"
                        onClick={() => changeLayout("table_full")}
                    />
                    <Button
                        icon={<MenuOutlined />}
                        type="text"
                        size="small"
                        onClick={() => changeLayout("table_min")}
                    />
                </Space>
            </div>
        </Flex>
    </>
  )
}

export default CollectionControls