const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("connected to Mongo DB"))
        .catch(err => console.error(err))
}
module.exports = dbConnect;
// exports =dbConnect