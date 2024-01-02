import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { tariffApi, useFetchTariffQuery } from "../../store/slices/tariffAPI";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import TableData from "./TableData";
import AddTariffData from "./AddTariffData";
import { MdAdd } from "react-icons/md";
import TariffTableEdit from "./TariffTableEdit";


const Table = () => {

    const [isAddData, setIsAddData] = useState(false)
    // fetching data from api using saga and RTK Query
    const { data, isLoading, isError } = useFetchTariffQuery();

    const handleIsAddData = () => {
        setIsAddData(!isAddData)
    }

    if (isLoading) {
        return <Loading />
    }

    if (isError || !data) {
        return <Error />
    }

    return (
        <table className='table mt-4 '>
            <thead className="table-head">
                <tr>
                    <th rowSpan={3}>S.No.br <br /> <input type="text" placeholder='search' /> </th>
                    <th rowSpan={3}>CZ Catlog Master Id <br /> <input type="text" placeholder='search' /></th>
                    <th rowSpan={3}>HCP Catlog Id <br /> (External Id) <br /> <input type="text" placeholder='search' /></th>
                    <th rowSpan={3}>Item Category <br /> <input type="text" placeholder='search' /></th>
                    <th rowSpan={3}>Item Title <br /> <input type="text" placeholder='search' /></th>
                    <th colSpan={4}>Room</th>
                </tr>

                <tr>
                    <th colSpan={2}>DELUXE/SINGLE ROOM AC</th>
                    <th colSpan={2}>SHARING ROOM AC</th>
                </tr>

                <tr>
                    <th>Rack Rate</th>
                    <th>Offered Rate</th>
                    <th>Rack Rate</th>
                    <th>Offered Rate</th>
                </tr>

            </thead>
            <tbody className="table-body">
                {!isAddData && <MdAdd className="add-button" onClick={handleIsAddData} />}
                {isAddData && <AddTariffData handleIsAddData={handleIsAddData} />}
                {data && data.map((e, ind) => (
                    <TableData key={e._id} tariff={e} ind={ind} />
                ))}
            </tbody>
        </table>
    )
}

export default Table