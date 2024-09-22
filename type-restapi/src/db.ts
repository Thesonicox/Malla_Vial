import { DataSource } from "typeorm";
import { Segmento } from "./entities/Segmento";
import { Bordillo } from "./entities/Bordillo";
import { Calzada } from "./entities/Calzada";


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Sebas27054',
    port: 5432,
    database: 'segmentos',
    entities: [Segmento,Bordillo,Calzada],
    logging: true,
    synchronize: true
})