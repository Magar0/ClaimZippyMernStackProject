const tariffRoutes = require('./routes/tariffRoutes.js');
const documentRoutes = require('./routes/documentRoutes.js');
const dbConnect = require('./mongoose/dbConnect.js')
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

dbConnect();
app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use('/tariff', tariffRoutes)
app.use('/document', documentRoutes)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'something went wrong' })
})

app.listen(port, () => {
    console.log("app is listening on port no", port);
})