"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const segmento_routes_1 = __importDefault(require("./routes/segmento.routes"));
const calzada_routes_1 = __importDefault(require("./routes/calzada.routes"));
const bordillo_routes_1 = __importDefault(require("./routes/bordillo.routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(segmento_routes_1.default);
app.use(calzada_routes_1.default);
app.use(bordillo_routes_1.default);
exports.default = app;
