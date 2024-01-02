import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { tariffApi, useFetchTariffQuery } from "../../store/slices/tariffAPI";
import Loading from "../Loading/Loading";


const Table = () => {

    // const dispatch = useDispatch();
    // const status = useFetchTariffQuery();
    // console.log(status);


    const { data, isLoading, isError } = useFetchTariffQuery();
    console.log("data", data);
    // console.log("loader: ", isLoading, " error: ", isError);

    // // useEffect(() => {
    // //     const data = async () => await dispatch(tariffApi.endpoints.fetchTariff.initiate())
    // //     console.log(data());
    // // }, [])

    // if (isLoading) {
    //     return <Loading />
    // }

    // if (isError) {
    //     return <h1 style={{ color: red }}>Something Went Wrong</h1>
    // }

    return (
        <table className='table mt-4'>
            <thead>
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
            <tbody>
                {
                    // !data && <h1> No Data Found </h1>
                }
                {/* {
                    data && data.map((tariffData, ind) => (
                        <Table key={ind} tariffData={tariffData} />
                    ))
                } */}
            </tbody>
        </table>
    )
}

export default Table