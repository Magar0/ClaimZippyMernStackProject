import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import TariffTableEdit from "./TariffTableEdit";
import { useDispatch } from "react-redux";
import { tariffApi, useFetchTariffQuery } from "../../store/slices/tariffAPI";


const TableData = ({ tariff, ind, refetch }) => {

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const { SNo, czCatlogMasterId, hcpCatlogId, category, title, deluxeSingleRoomAC, sharingRoomAC, _id } = tariff;

    const handleEditClick = (id) => {
        setIsEditing(!isEditing);
        refetch();
    };

    const handleDelete = () => {
        dispatch(tariffApi.endpoints.deleteTariff.initiate(tariff._id));

        setTimeout(() => {
            refetch()
        }, 1000);

    }

    return (
        <>
            {
                !isEditing &&
                <tr>
                    <td>{ind}</td>
                    <td>{czCatlogMasterId}</td>
                    <td>{hcpCatlogId}</td>
                    <td>{category}</td>
                    <td>{title}</td>
                    <td>{deluxeSingleRoomAC.rackRate}</td>
                    <td>{deluxeSingleRoomAC.offerRate}</td>
                    <td>{sharingRoomAC.rackRate}</td>
                    <td>{sharingRoomAC.offerRate}

                        <div className="float-end">
                            <MdEdit className="edit-button" onClick={handleEditClick} />
                            <MdDelete className="delete-button" onClick={handleDelete} />
                        </div>
                    </td>
                </tr>
            }
            {
                isEditing &&
                <TariffTableEdit tariff={tariff} ind={ind} handleEditClick={handleEditClick} refetch={refetch} />

            }
        </>
    )
}

export default TableData;