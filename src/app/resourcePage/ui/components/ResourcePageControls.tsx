"use client"
import { Flex } from "antd";
import ResourcePageLayoutChoice from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageLayoutChoice";
import { ResourcePageLayout } from "@/app/resourcePage/domain/ResourcePageLayout";
import ResourcePageSortSelect from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageSortSelect";
import { ResourcePageSort } from "@/app/resourcePage/domain/ResourcePageSort";
import ResourcePageCopyButton from "@/app/resourcePage/ui/components/ResourcePageControlsItems/ResourcePageCopyButton";
import { ResourcePageQueryParam } from "../../domain/ResourcePageQueryParam";
import { useResourcePageQueryParams } from "../../hooks/useResourcePageQueryParams";

const ResourcePageControls = () => {
    const { setParams, sort, layout } = useResourcePageQueryParams()

    const changeLayoutParams = (layoutName: ResourcePageLayout) => {
        setParams({
            param: ResourcePageQueryParam.layout,
            valueToSet: layoutName
        })
    }

    const changeSortParams = (sortVal: ResourcePageSort) => {
        setParams({
            param: ResourcePageQueryParam.sort,
            valueToSet: sortVal
        })
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
