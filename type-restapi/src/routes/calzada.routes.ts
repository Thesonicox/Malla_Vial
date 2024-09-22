import { Router } from "express";
import { createCalzada, deleteCalzada, getCalzada, getCalzadas, updateCalzada } from "../controllers/calzada.controllers";


const router = Router()

router.post('/calzada', createCalzada)

router.get('/calzada', getCalzadas)

router.put('/calzada/:id', updateCalzada)

router.delete('/calzada/:id', deleteCalzada)

router.get('/calzada/:id', getCalzada)



export default router


