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
exports.getCalzada = exports.deleteCalzada = exports.updateCalzada = exports.getCalzadas = exports.createCalzada = void 0;
const Calzada_1 = require("../entities/Calzada");
const Segmento_1 = require("../entities/Segmento");
const createCalzada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, ancho, segmentoId } = req.body;
    try {
        const segmento = yield Segmento_1.Segmento.findOneBy({ id: segmentoId });
        console.log(segmento);
        if (!segmento) {
            return res.status(404).json({ message: "Segmento no encontrado" });
        }
        const calzada = new Calzada_1.Calzada();
        calzada.tipo = tipo;
        calzada.ancho = ancho;
        calzada.segmento = segmento;
        yield calzada.save();
        return res.json(calzada);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createCalzada = createCalzada;
const getCalzadas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const calzadas = yield Calzada_1.Calzada.find({ relations: ["segmento"] });
        return res.json(calzadas);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getCalzadas = getCalzadas;
const updateCalzada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { tipo, ancho } = req.body;
    try {
        const calzada = yield Calzada_1.Calzada.findOne({ where: { id: parseInt(id) }, relations: ["segmento"] });
        if (!calzada) {
            return res.status(404).json({ message: "Calzada no encontrada" });
        }
        calzada.tipo = tipo;
        calzada.ancho = ancho;
        yield calzada.save();
        return res.status(200).json({ message: "Calzada actualizada exitosamente", calzada });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateCalzada = updateCalzada;
const deleteCalzada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Calzada_1.Calzada.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ mesagge: 'Calzada not found' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteCalzada = deleteCalzada;
const getCalzada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const calzada = yield Calzada_1.Calzada.findOneBy({ id: parseInt(id) });
        return res.json(calzada);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getCalzada = getCalzada;
