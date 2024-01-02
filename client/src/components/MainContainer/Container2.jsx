import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Tariff from '../Tariff/Tariff'
import Document from '../Document/Document'

const Container2 = () => {
    return (
        <>
            <div className="container2 bg-white p-3 bg-dark mx-auto shadow mt-4">
                <ProgressBar />
                <Tariff />
                <Document />
            </div>
        </>
    )
}

export default Container2