"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Segmento_1 = require("./entities/Segmento");
const Bordillo_1 = require("./entities/Bordillo");
const Calzada_1 = require("./entities/Calzada");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Sebas27054',
    port: 5432,
    database: 'segmentos',
    entities: [Segmento_1.Segmento, Bordillo_1.Bordillo, Calzada_1.Calzada],
    logging: true,
    synchronize: true
});
