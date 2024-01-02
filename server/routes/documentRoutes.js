const express = require('express');
const document = require('../mongoose/models/document')

const router = express.Router();

//get all data
router.get('/', (req, res) => {

    document.find().then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: "Something went wrong" }))
})


//post data
router.post('/', (req, res) => {
    const { type, description, remarks } = req.body
    if (!type) {
        return res.status(404).json({ message: "Please input type" })
    }
    document.create({ type, description, remarks }).then(() => res.status(200).json({ message: "Created Successful" }))
        .catch(err => res.status(500).json({ message: "Something went wrong" }))
})


//edit or update data
router.put('/:id', (req, res) => {
    const id = req.params.id;

    document.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(200).json({ message: "update successful" }))
        .catch(err => res.status(500).json({ message: "Something went wrong" }))

})


//delete data
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    document.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(400).json({ message: "data not found" })
            }
            res.status(200).json({ message: "Deleted Successful" })
        })
        .catch(err => res.status(500).json({ message: "Something went wrong" }))

})


module.exports = router;