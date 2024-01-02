import { IoIosNotificationsOutline } from "react-icons/io";
import './container.css'

const Container1 = () => {
    return (
        <div className="container1 bg-white p-3 bg-dark mx-auto shadow ">
            <div className='box-1 d-flex justify-content-between align-items-center'>
                <h2 className="fs-5 fw-semibold m-0 text-darkblue">Package Executive Dashboard</h2>
                <div className="icon d-flex align-items-center">
                    <p className="m-0">Welcome Thapa</p>
                    <img src="./profile.jpg" alt="" height={30} width={30} className="ms-2 me-3 rounded-circle " />
                    <i className="fs-4 mb-1 text-primary "><IoIosNotificationsOutline /></i>

                </div>
            </div>
            <hr className="mt-2" />
            <div className="box-2">
                <div className="d-flex justify-content-between mt-4 px-3 ">
                    <h3 className="fs-5 text-darkblue">Empanelment Case Requests</h3>
                    <p className="fst-italic text-info ">VIEW ASSIGNED GRADE</p>
                </div>
                <div className="details d-flex justify-content-evenly">
                    <div className="d-flex flex-column">
                        <h5>THCP Code:</h5>
                        <p>312568</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Case Id:</h5>
                        <p>1-56894524</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Case Date:</h5>
                        <p>29 Jun 2023</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Zone:</h5>
                        <p>North</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Provider Name:</h5>
                        <p>12458-Apollo Hospital Nerul, Navi Mumbai</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Status:</h5>
                        <p>Work Flow Created</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Last Assigned:</h5>
                        <p>Amit Kumar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container1