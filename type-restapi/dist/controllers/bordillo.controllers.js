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
exports.getBordillo = exports.deleteBordillo = exports.updateBordillo = exports.getBordillos = exports.createBordillo = void 0;
const Bordillo_1 = require("../entities/Bordillo");
const Segmento_1 = require("../entities/Segmento");
const createBordillo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { material, altura, segmentoId } = req.body;
    try {
        const segmento = yield Segmento_1.Segmento.findOneBy({ id: segmentoId });
        if (!segmento) {
            return res.status(404).json({ message: "Segmento no encontrado" });
        }
        const bordillo = new Bordillo_1.Bordillo();
        bordillo.material = material;
        bordillo.altura = altura;
        bordillo.segmento = segmento;
        yield bordillo.save();
        return res.json(bordillo);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createBordillo = createBordillo;
const getBordillos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bordillos = yield Bordillo_1.Bordillo.find({ relations: ["segmento"] });
        return res.json(bordillos);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getBordillos = getBordillos;
const updateBordillo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { material, altura } = req.body;
    try {
        const bordillo = yield Bordillo_1.Bordillo.findOne({ where: { id: parseInt(id) }, relations: ["segmento"] });
        if (!bordillo) {
            return res.status(404).json({ message: "Bordillo no encontrado" });
        }
        bordillo.material = material;
        bordillo.altura = altura;
        yield bordillo.save();
        return res.status(200).json({ message: "Bordillo actualizado exitosamente", bordillo });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateBordillo = updateBordillo;
const deleteBordillo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Bordillo_1.Bordillo.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Bordillo not found' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteBordillo = deleteBordillo;
const getBordillo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const bordillo = yield Bordillo_1.Bordillo.findOneBy({ id: parseInt(id) });
        return res.json(bordillo);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getBordillo = getBordillo;
