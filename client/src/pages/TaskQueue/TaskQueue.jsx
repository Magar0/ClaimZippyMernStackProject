import { useSelector } from 'react-redux'
import Container1 from '../../components/MainContainer/Container1'
import Container2 from '../../components/MainContainer/Container2'

const TaskQueue = () => {

    const isMenuOpen = useSelector(state => state.task.isMenuOpen)

    const myStyle = {
        marginTop: "80px",
        padding: "15px 20px 10px 15px",
        transition: "all 0.5s ease 0s",
        transform: (isMenuOpen ? "translate3d(300px, 0px, 0px)" : ""),
        width: `calc(100% - ${isMenuOpen ? "300px" : "0px"} )`
    }
    return (
        <div className="main-container" style={myStyle}>
            <Container1 />
            <Container2 />
        </div>

    )
}

export default TaskQueue;

