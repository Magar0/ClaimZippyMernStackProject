import Table from './Table'
import './tariff.css'

const Tariff = () => {
    return (
        <div className="tariff text-center">
            <h1 className='text-primary mb-3'>Advance Tariff</h1>
            <div className='category w-75 mx-auto d-flex'>
                <button>Consultion</button>
                <button>Pharmacy</button>
                <button>Investigation</button>
                <button>Procedure</button>
                <button>Package</button>
                <button>Home Care</button>
            </div>
            <Table />

        </div>
    )
}

export default Tariff