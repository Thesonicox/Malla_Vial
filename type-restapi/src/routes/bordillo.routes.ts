import { Router } from "express";
import { createBordillo, deleteBordillo, getBordillo, getBordillos, updateBordillo } from "../controllers/bordillo.controllers";


const router = Router()

router.post('/bordillo', createBordillo)

router.get('/bordillo', getBordillos)

router.put('/bordillo/:id', updateBordillo)

router.delete('/bordillo/:id', deleteBordillo)

router.get('/bordillo/:id', getBordillo)



export default router


