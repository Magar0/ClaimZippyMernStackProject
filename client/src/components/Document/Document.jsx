import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useFetchDocumentQuery } from "../../store/slices/documentApi";
import DocumentTableData from "./DocumentTableData";


const DocumentTable = () => {

    // fetching data from api using saga and RTK Query
    const { data, isLoading, isError } = useFetchDocumentQuery();

    if (isLoading) {
        return <Loading />
    }

    if (isError || !data) {
        return <Error />
    }

    return (
        <table className='table mt-4 text-center'>
            <thead className="table-head">
                <tr>
                    <th>Document Type</th>
                    <th>Document Description</th>
                    <th></th>
                    <th>Remarks</th>
                </tr>

            </thead>
            <tbody className="table-body">
                {data && data.map((e) => (
                    <DocumentTableData key={e._id} document={e} />
                ))}
            </tbody>
        </table>
    )
}

export default DocumentTable;