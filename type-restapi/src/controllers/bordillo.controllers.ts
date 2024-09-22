import { Request, Response } from "express"
import { Bordillo } from '../entities/Bordillo';
import { Segmento } from '../entities/Segmento';

export const createBordillo = async (req: Request, res: Response) => {
    const { material, altura, segmentoId} = req.body
    try {

        const segmento = await Segmento.findOneBy({ id: segmentoId });
        
        if (!segmento) {
            return res.status(404).json({ message: "Segmento no encontrado" });
        }


        const bordillo = new Bordillo();
        bordillo.material = material;
        bordillo.altura = altura;
        bordillo.segmento = segmento;

        await bordillo.save();

        return res.json(bordillo);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getBordillos = async (req: Request, res: Response) => {
    try {
        const bordillos = await Bordillo.find({ relations: ["segmento"] }); 
        return res.json(bordillos);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateBordillo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { material, altura } = req.body;
    try {
      const bordillo = await Bordillo.findOne({ where: { id: parseInt(id) }, relations: ["segmento"] });
  
      if (!bordillo) {
        return res.status(404).json({ message: "Bordillo no encontrado" });
      }
  
      bordillo.material = material;
      bordillo.altura = altura;
  
      await bordillo.save();
  
      return res.status(200).json({ message: "Bordillo actualizado exitosamente", bordillo });
  
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const deleteBordillo = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

    const result = await Bordillo.delete({id: parseInt(id)})

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Bordillo not found' });


    }
    
    return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }

}

export const getBordillo = async (req: Request, res:Response) => {
    try {
        const {id} =req.params
        const bordillo = await Bordillo.findOneBy({id: parseInt(id)})
        return res.json(bordillo)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}