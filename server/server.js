import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'
import { dataArea } from './src/ultis/data'
import { getNumberFromString } from './src/ultis/common'
console.log(getNumberFromString('2 triệu/tháng'))

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initRoutes(app)
connectDatabase()
app.use('/', (req,res) => {res.send('sever on ...')})

const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`Server is running on the port ${listener.address().port}`)
})