
const TableData = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

    const { SNo, CZCatlogMasterId, HCPCatlogID, category, title, deluxeSingleRoomAC, SharingRoomAC } = props
    const handleEditClick = (id) => {
        setIsEditing(true);
    };

    return (
        <tr>
            <td>SNo</td>
            <td>CZCatlogMasterId</td>
            <td>HCPCatlogID</td>
            <td>category</td>
            <td>title</td>
            <td>deluxeSingleRoomAC</td>
            <td>SharingRoomAC</td>
        </tr>
    )
}

export default TableData