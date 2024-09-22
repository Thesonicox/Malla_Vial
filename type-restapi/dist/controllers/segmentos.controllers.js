"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSegmentoById = exports.deleteSegmento = exports.updateSegmento = exports.getSegmentos = exports.createSegmento = void 0;
const Segmento_1 = require("../entities/Segmento");
const createSegmento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { direccion, longitud, numero, calzadas, bordillos } = req.body;
    try {
        const segmento = new Segmento_1.Segmento();
        segmento.direccion = direccion;
        segmento.longitud = longitud;
        segmento.numero = numero;
        yield segmento.save();
        return res.json(segmento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createSegmento = createSegmento;
const getSegmentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const segmento = yield Segmento_1.Segmento.find({
            relations: ["calzadas", "bordillos"]
        });
        return res.json(segmento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getSegmentos = getSegmentos;
const updateSegmento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { longitud, direccion, numero } = req.body;
        const segmento = yield Segmento_1.Segmento.findOne({ where: { id: parseInt(id) } });
        if (!segmento) {
            return res.status(404).json({ message: 'Segmento no encontrado' });
        }
        segmento.longitud = longitud;
        segmento.direccion = direccion;
        segmento.numero = numero;
        yield segmento.save();
        return res.status(200).json({ message: "Segmento actualizado exitosamente", segmento });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateSegmento = updateSegmento;
const deleteSegmento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Segmento_1.Segmento.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ mesagge: 'Segmento not found' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteSegmento = deleteSegmento;
const getSegmentoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const segmento = yield Segmento_1.Segmento.findOne({
            where: { id: parseInt(id) },
            relations: ["calzadas", "bordillos"],
        });
        if (!segmento) {
            return res.status(404).json({ message: "Segmento no encontrado" });
        }
        return res.json(segmento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getSegmentoById = getSegmentoById;
