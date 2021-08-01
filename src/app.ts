import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from "./routes/product.routes";


// Set the server and the port
const app = express();
app.set('port', process.env.PORT || 3000);

// Add cors ,m morgan for the request debug and the json tools
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(productRoutes);

export default app;
