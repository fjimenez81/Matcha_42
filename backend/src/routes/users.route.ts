import { Router } from 'express'
import { allUsers, createuser } from '../controllers/users.controller'

const router = Router()
router.post("/createUser", createuser)
router.get("/allUsers", allUsers)

export default router
