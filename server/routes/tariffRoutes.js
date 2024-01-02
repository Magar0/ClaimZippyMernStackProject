const express = require('express');
const tariffPlan = require('../mongoose/models/tariffPlan')

const router = express.Router();

//Get all data
router.get('/', (req, res) => {
    tariffPlan.find().then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "something went wrong" })
        })
})


// Post data
router.post('/', async (req, res) => {
    try {
        const { czCatlogMasterId, hcpCatlogId, category, title, deluxeSingleRoomAC, sharingRoomAC } = req.body
        // Validating
        if (!czCatlogMasterId || !hcpCatlogId || !category || !title || !deluxeSingleRoomAC.rackRate || !sharingRoomAC.rackRate) {
            return res.status(400).json({ message: "missing required field" })
        }

        const newTariffPlan = new tariffPlan(req.body);
        await newTariffPlan.save();
        res.status(200).json({ message: "Added successfully" })
    } catch (err) {
        // if validation of mongoose schema fails
        if (err._message === 'TariffPlan validation failed') {
            return res.status(400).json({ message: "validation failed" });
        } else {
            console.error(err);
            return res.status(500).json({ message: "Something Went Wrong" })
        }
    }
})

// Update data
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedData = await tariffPlan.findByIdAndUpdate(id, updates, { new: true })
        if (!updatedData) {
            return res.status(404).json({ message: "tariff plan not found" })
        }
        res.status(201).json({ message: "data has been updated" })
    } catch (err) {
        // if validation of mongoose schema fails
        if (err._message === 'TariffPlan validation failed') {
            return res.status(400).json({ message: "validation failed" });
        } else {
            console.error(err);
            return res.status(500).json({ message: "Something Went Wrong" })
        }

    }
})


//Delete data
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await tariffPlan.findByIdAndDelete(id)

        if (!deletedData) {
            return res.status(404).json({ message: "tariff plan not found" })
        }
        res.status(200).json({ message: "Deleted Successful" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Something Went Wrong" })
    }
})

module.exports = router;