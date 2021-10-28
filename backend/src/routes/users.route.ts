import { Router } from 'express'
import {
    allUsers,
    createUser,
    deleteAll,
    deleteUser,
    findUser,
    updateUser
} from '../controllers/users.controller'

const router = Router()
router.post("/createUser", createUser)
router.get("/allUsers", allUsers)
router.get("/findUser", findUser)
router.put("/updateUser", updateUser)
router.delete("/deleteUser/:id", deleteUser)
router.delete("/deleteAll", deleteAll)

export default router
