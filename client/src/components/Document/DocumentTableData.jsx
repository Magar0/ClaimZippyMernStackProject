import React, { useEffect, useState } from 'react'
import { documentApi, useFetchDocumentQuery } from '../../store/slices/documentApi';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { MdEdit, MdDelete } from "react-icons/md";


const DocumentTableData = ({ document, refetch }) => {

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(document);


    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedData(pre => ({ ...pre, [name]: value }))
    }

    const handleSave = () => {
        handleEditClick();
        const { _id, ...rest } = editedData
        dispatch(documentApi.endpoints.putDocument.initiate(_id, rest))
        setTimeout(() => {
            refetch()
        }, 1000);
    }

    const handleCancel = () => {
        handleEditClick()
    }

    const handleEditClick = (id) => {
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        dispatch(documentApi.endpoints.deleteDocument.initiate(document._id));
        setTimeout(() => {
            refetch()
        }, 1000);
    }

    // useEffect(() => {
    //     console.log("I m running");
    // }, [data])


    const { type, description, remarks } = document
    return (
        <>
            {!isEditing &&
                <tr>
                    <td>{type} </td>
                    <td>{description} </td>
                    <td> </td>
                    <td>{remarks}
                        <div className="float-end">
                            <MdEdit className="edit-button" onClick={handleEditClick} />
                            <MdDelete className="delete-button" onClick={handleDelete} />
                        </div>
                    </td>
                </tr>
            }
            {
                isEditing &&
                <tr>
                    <td><input type="text" name='type' onChange={handleChange} value={editedData.type} /></td>
                    <td><input type="text" name='decription' onChange={handleChange} value={editedData.description} /></td>
                    <td></td>
                    <td><input type="text" name='remarks' onChange={handleChange} value={editedData.remarks} />   <div className="float-end">
                        <BsFillCheckCircleFill className="save-button" onClick={handleSave} />
                        <ImCross className="cross-button" onClick={handleCancel} />
                    </div></td>
                </tr>
            }
        </>
    )
}

export default DocumentTableData;