import { Request, Response } from "express"
import { Calzada } from '../entities/Calzada';
import { Segmento } from '../entities/Segmento';

export const createCalzada = async (req: Request, res: Response) => {
    const { tipo, ancho, segmentoId } = req.body;

    try {
        const segmento = await Segmento.findOneBy({ id: segmentoId });

        console.log(segmento)

        if (!segmento) {
            return res.status(404).json({ message: "Segmento no encontrado" });
        }

        const calzada = new Calzada();
        calzada.tipo = tipo;
        calzada.ancho = ancho;
        calzada.segmento = segmento; 
        await calzada.save();

        return res.json(calzada);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const getCalzadas = async (req: Request, res: Response) => {
    try {
        const calzadas = await Calzada.find({ relations: ["segmento"] }); 
        return res.json(calzadas);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const updateCalzada = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tipo, ancho } = req.body;

  try {
    const calzada = await Calzada.findOne({ where: { id: parseInt(id) }, relations: ["segmento"] });

    if (!calzada) {
      return res.status(404).json({ message: "Calzada no encontrada" });
    }

    calzada.tipo = tipo;
    calzada.ancho = ancho;

    await calzada.save();

    return res.status(200).json({ message: "Calzada actualizada exitosamente", calzada });

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


export const deleteCalzada = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

    const result = await Calzada.delete({id: parseInt(id)})

    if (result.affected === 0) {
        return res.status(404).json({mesagge: 'Calzada not found'})
    }
    
    return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }

}

export const getCalzada = async (req: Request, res:Response) => {   
    try {
        const {id} =req.params
        const calzada = await Calzada.findOneBy({id: parseInt(id)})
        return res.json(calzada)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}
