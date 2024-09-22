import { Request, Response } from "express"
import { Segmento } from '../entities/Segmento';


export const createSegmento = async (req: Request, res: Response) => {
    const { direccion, longitud, numero, calzadas, bordillos } = req.body;
  
    try {
      const segmento = new Segmento();
      segmento.direccion = direccion;
      segmento.longitud = longitud;
      segmento.numero = numero;
  
      await segmento.save();
  
      return res.json(segmento);
  
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const getSegmentos = async (req: Request, res: Response) => {
    try {
        const segmento = await Segmento.find({
            relations: ["calzadas", "bordillos"]
        })

        return res.json(segmento);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
};

export const updateSegmento = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { longitud, direccion, numero } = req.body;
  
      const segmento = await Segmento.findOne({ where: { id: parseInt(id) } });
  
      if (!segmento) {
        return res.status(404).json({ message: 'Segmento no encontrado' });
      }
  
      segmento.longitud = longitud;
      segmento.direccion = direccion;
      segmento.numero = numero;
  
      await segmento.save();
  
      return res.status(200).json({ message: "Segmento actualizado exitosamente", segmento });
  
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  

export const deleteSegmento = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

         const result = await Segmento.delete({id: parseInt(id)})

    if (result.affected === 0) {
        return res.status(404).json({mesagge: 'Segmento not found'})
    }
    
    return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }

}


export const getSegmentoById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const segmento = await Segmento.findOne({
        where: { id: parseInt(id) },
        relations: ["calzadas", "bordillos"], 
      });
  
      if (!segmento) {
        return res.status(404).json({ message: "Segmento no encontrado" });
      }
  
      return res.json(segmento);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  