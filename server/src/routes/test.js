import express from 'express'
import * as controllers from '../controllers/test'
// CRUD
const router = express.Router()

router.get('/all', controllers.getTest)

export default router