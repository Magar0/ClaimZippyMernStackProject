import { useState } from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { documentApi } from '../../store/slices/documentApi';

const AddDocument = ({ handleIsAddData, refetch }) => {

    const dispatch = useDispatch();
    const [editedData, setEditedData] = useState({
        type: "",
        description: "",
        remarks: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedData((pre) => (
            { ...pre, [name]: value }
        ))

    }

    const handleSave = () => {
        handleIsAddData();
        dispatch(documentApi.endpoints.postDocument.initiate(editedData))
        setTimeout(() => {
            refetch()
        }, 1000);
    }

    const handleCancel = () => {
        handleIsAddData()
    }

    return (
        <>
            <tr className='tariffTableEdit'>
                <td><input type="text" name='type' onChange={handleChange} value={editedData.type} /></td>
                <td><input type="text" name='description' onChange={handleChange} value={editedData.description} /></td>
                <td></td>
                <td><input type="text" name='remarks' onChange={handleChange} value={editedData.remarks} />
                    <div className="float-end">
                        <BsFillCheckCircleFill className="save-button" onClick={handleSave} />
                        <ImCross className="cross-button" onClick={handleCancel} />
                    </div>
                </td>
            </tr>
            tr
        </>
    )
}

export default AddDocument