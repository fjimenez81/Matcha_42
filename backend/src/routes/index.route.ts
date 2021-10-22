import { Router } from 'express'
import { welcome } from '../controllers/index.controller'

const router = Router()
router.get("/", welcome)

export default router