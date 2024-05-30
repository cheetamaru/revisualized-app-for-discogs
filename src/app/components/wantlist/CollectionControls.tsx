"use client"
import { Button, Flex, Select, Space, Tooltip, notification } from "antd";
import { AppstoreOutlined, BarsOutlined, CopyOutlined, FallOutlined, MenuOutlined, RiseOutlined } from "@ant-design/icons";
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
    const [api, contextHolder] = notification.useNotification();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = searchParams.get('sort') || "rating";
    const sort_order = searchParams.get('sort_order') || "desc";
    const layout = searchParams.get('layout') || "tiles";

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
                <Space>
                    <span>Sort: </span>
                    <Select
                        style={{
                            width: 130,
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
                    <Tooltip title="Tiles layout">
                        <Button
                            icon={<AppstoreOutlined />}
                            type="text"
                            size="small"
                            style={{
                                background: layout == "tiles" ? "lightgray" : undefined
                            }}
                            onClick={() => changeLayout("tiles")}
                        />
                    </Tooltip>
                    <Tooltip title="Table with image layout">
                        <Button
                            icon={<BarsOutlined style={{fontSize: 16}} />}
                            type="text"
                            size="small"
                            style={{
                                background: layout == "table_full" ? "lightgray" : undefined
                            }}
                            onClick={() => changeLayout("table_full")}
                        />
                    </Tooltip>
                    <Tooltip title="Table without image layout">
                        <Button
                            icon={<MenuOutlined />}
                            type="text"
                            size="small"
                            style={{
                                background: layout == "table_min" ? "lightgray" : undefined
                            }}
                            onClick={() => changeLayout("table_min")}
                        />
                    </Tooltip>
                </Space>
            </div>
            <div>
                <Button
                    ghost
                    type="dashed"
                    style={{
                        color: "gray",
                        borderColor: "lightgray",
                    }}
                    icon={<CopyOutlined />}
                    onClick={handleCopy}
                />
            </div>
        </Flex>
    </>
  )
}

export default CollectionControls