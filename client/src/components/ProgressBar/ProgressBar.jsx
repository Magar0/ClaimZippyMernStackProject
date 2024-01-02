import { FaCircle } from "react-icons/fa6";
import { TbCircleDotted } from "react-icons/tb";
import './progressBar.css'

const ProgressBar = () => {

    return (
        <>
            <div className='progressBar d-flex justify-content-evenly mt-3 text-primary '>
                <div>
                    <i><FaCircle /></i>
                    <p>Provider Details</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Bank Details</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Contact Details</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Eligibility Form</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Common Question</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Specialist Form</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Video Audit</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Other Document</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Base Tariff</p>
                </div>
                <div>
                    <i><FaCircle /></i>
                    <p>Advance Tariff</p>
                </div>
                <div>
                    <i><TbCircleDotted /></i>
                    <p>Medical Practioner Details</p>
                </div>

            </div>
        </>
    )
}

export default ProgressBar