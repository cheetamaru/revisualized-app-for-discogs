import { DiscogsWantlistEntry } from "@/app/types/DiscogsWantlistEntry"
import "./table.css"
import { Button } from "antd";
import Text from 'antd/es/typography/Text'
import DiscogsLogo from "../discogs/DiscogsLogo";
import { getEntrySrc } from '@/utils/discogsLinks/getEntrySrc'
import Paragraph from "antd/es/typography/Paragraph";

type Props = {
    data: DiscogsWantlistEntry[];
    withImages?: boolean;
}

const CollectionTable = ({ data, withImages }: Props) => {
  return (
    <div style={{maxWidth: 900, width: "100%"}}>
                <table>
                    <colgroup key={withImages ? "image" : "no-ima"}>
                        { withImages && <col width="8%"></col>}
                        <col width={withImages ? "80%" : "90%"}></col>
                        <col></col>
                    </colgroup>
                    {/* <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody>
                        { data.map(el => {
                            return (<>
                                <tr>
                                    {
                                        withImages && 
                                        <td key={el.basic_information.thumb}><img src={el.basic_information.thumb} alt="kek" height={50} width={50}/></td>
                                    }
                                    <td
                                        style={{
                                            paddingRight: 0
                                        }}
                                    >
                                        <Paragraph
                                            copyable
                                            ellipsis={
                                                {
                                                    rows: 2
                                                }
                                            }
                                        >
                                            {el.basic_information.title} ({el.basic_information.year}) — {el.basic_information.artists[0].name}
                                        </Paragraph>
                                        
                                    </td>
                                    <td style={{ borderLeft: "1px solid rgb(0 0 0 / 1%)"}}>
                                        <Button
                                            type="link"
                                            href={getEntrySrc(el.basic_information.id)} 
                                            target="_blank"
                                            icon={<DiscogsLogo size={14} />}
                                            style={{ alignSelf: "flex-end", display: "flex", alignItems: "baseline",
                                            padding: 0,
                                            margin: 0,
                                            }}
                                            iconPosition="end"
                                            
                                        >
                                            More
                                        </Button>
                                    </td>
                                </tr>
                            </>)
                        }) }

                    </tbody>
                </table>
    </div>

  )
}

export default CollectionTable