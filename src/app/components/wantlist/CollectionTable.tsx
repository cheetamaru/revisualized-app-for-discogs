import { DiscogsWantlistEntry } from "@/app/types/DiscogsWantlistEntry"
import "./table.css"

type Props = {
    data: DiscogsWantlistEntry[];
    withImages?: boolean;
}

const CollectionTable = ({ data, withImages }: Props) => {
  return (
    <div>
        <div>
            <div>
                <table>
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
                                    {withImages && <td key={el.basic_information.thumb}><img src={el.basic_information.thumb} alt="kek" height={50} width={50}/></td>
                                    }
                                    <td>{el.basic_information.title}</td>
                                    <td>{el.basic_information.formats[0].name}</td>
                                    <td>{el.basic_information.year}</td>
                                </tr>
                            </>)
                        }) }

                    </tbody>
                </table>
            </div>
        </div>
    </div>

  )
}

export default CollectionTable