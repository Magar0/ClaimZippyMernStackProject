import { useState } from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { tariffApi } from '../../store/slices/tariffAPI';


const TariffTableEdit = ({ tariff, ind, handleEditClick, refetch }) => {

    const dispatch = useDispatch();
    const [editedData, setEditedData] = useState({ ...tariff });


    const handleChange = (e) => {
        const { name, value } = e.target

        setEditedData(pre => {
            if (name === "delRoom-rackRate") {
                return { ...pre, deluxeSingleRoomAC: { ...pre.deluxeSingleRoomAC, rackRate: value } }
            }
            if (name === "delRoom-offerRate") {
                return { ...pre, deluxeSingleRoomAC: { ...pre.deluxeSingleRoomAC, offerRate: value } }
            }
            if (name === "shareRoom-rackRate") {
                return { ...pre, sharingRoomAC: { ...pre.sharingRoomAC, rackRate: value } }
            }
            if (name === "shareRoom-offerRate") {
                return { ...pre, sharingRoomAC: { ...pre.sharingRoomAC, offerRate: value } }
            }
            return { ...pre, [name]: value }
        })
    }


    const handleSave = () => {
        handleEditClick();
        dispatch(tariffApi.endpoints.putTariff.initiate(editedData._id, editedData))
        setTimeout(() => {
            refetch()
        }, 1000);
    }

    const handleCancel = () => {
        handleEditClick()
    }

    return (
        <tr className='tariffTableEdit'>
            <td>{ind}</td>
            <td><input type="text" name="czCatlogMasterId" value={editedData.czCatlogMasterId} onChange={handleChange} /> </td>
            <td><input type="text" name="hcpCatlogId" value={editedData.hcpCatlogId} onChange={handleChange} /> </td>
            <td><input type="text" name="category" value={editedData.category} onChange={handleChange} /> </td>
            <td><input type="text" name="title" value={editedData.title} onChange={handleChange} /> </td>
            <td><input type="text" name='delRoom-rackRate' value={editedData.deluxeSingleRoomAC.rackRate} onChange={handleChange} /> </td>
            <td><input type="text" name="delRoom-offerRate" value={editedData.deluxeSingleRoomAC.offerRate} onChange={handleChange} /></td>
            <td><input type="text" name="shareRoom-rackRate" value={editedData.sharingRoomAC.rackRate} onChange={handleChange} /> </td>
            <td><input type="text" name="shareRoom-offerRate" value={editedData.sharingRoomAC.offerRate} onChange={handleChange} />
                <div className="float-end">
                    <BsFillCheckCircleFill className="save-button" onClick={handleSave} />
                    <ImCross className="cross-button" onClick={handleCancel} />
                </div>
            </td>
        </tr>

    )
}

export default TariffTableEdit;