import { push as Menu } from 'react-burger-menu';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import { NavLink, Outlet } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { AiOutlineAudit } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { FaNetworkWired } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { BsPieChart } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setIsMenuOpen } from '../../store/slices/taskSlices';

const Navbar = () => {

    const dispatch = useDispatch();
    const handleChange = (state) => {
        dispatch(setIsMenuOpen(state.isOpen))
    };


    return (
        <>
            <nav className='nav-bar pt-2 text-center max-width bg-white shadow  '>
                <div>
                    <Menu noOverlay disableCloseOnEsc onStateChange={handleChange} >
                        <NavLink id="dashboard" className="menu-item" to="/">
                            <i><BsPieChart /></i>
                            Dashboard
                        </NavLink>
                        <NavLink id="task" className="menu-item" to="/task">
                            <i><FaTasks /></i>
                            Task Queue</NavLink>
                        <NavLink id="network" className="menu-item" to="/network">
                            <i><FaNetworkWired /></i>
                            Network Providers</NavLink>
                        <NavLink id="non-network" className="menu-item" to="/non-network">
                            <i><RxCross1 /></i>
                            Non-Network Providers</NavLink>
                        <NavLink id="document" className="menu-item" to="/document">
                            <i><HiOutlineDocumentDuplicate /></i>
                            My Document</NavLink>
                        <NavLink id="profile" className="menu-item" to="/profile">
                            <i><CgProfile /></i>
                            Profile</NavLink>
                        <NavLink id="audit-trail" className="menu-item" to="/audittrail">
                            <i><AiOutlineAudit /></i>
                            Audit Trail</NavLink>
                        <NavLink id="support" className="menu-item" to="/support">
                            <i><BiSupport /></i>
                            Support
                        </NavLink>
                        <NavLink id="search" className="menu-item" to="/search">
                            <i><IoSearchSharp /></i>
                            Search
                        </NavLink>
                    </Menu>
                </div>
                <div className='p-3'>
                    <img src="./logo.png" height="35" alt="" />
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;