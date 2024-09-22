import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import segmentoRoutes from './routes/segmento.routes';
import calzadaRoutes from  './routes/calzada.routes';
import bordilloRoutes from  './routes/bordillo.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use(segmentoRoutes);
app.use(calzadaRoutes);
app.use(bordilloRoutes);

export default app;