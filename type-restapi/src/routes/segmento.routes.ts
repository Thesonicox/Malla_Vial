import { Router } from "express";
import { createSegmento, deleteSegmento, getSegmentoById, getSegmentos, updateSegmento } from "../controllers/segmentos.controllers";


const router = Router()

router.post('/segmento', createSegmento)

router.get('/segmento', getSegmentos)

router.put('/segmento/:id', updateSegmento)

router.delete('/segmento/:id', deleteSegmento)

router.get('/segmento/:id', getSegmentoById)



export default router


