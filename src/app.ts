import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


const app = express();
app.set('port', process.env.PORT || 3000);

export default app;
