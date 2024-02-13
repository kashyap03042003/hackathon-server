import cookieParser from 'cookie-parser';
config();
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from '../../hack/server/middlewares/error.middlewares.js';
import userRoutes from './routes/user.routes.js';
import clubRoutes from './routes/club.routes.js';
import profRoutes from './routes/prof.routes.js';
import eventRoutes from './routes/event.routes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/v1/user', userRoutes);

app.use('/api/v1/club',clubRoutes);

app.use('/api/v1/prof',profRoutes);

app.use('/api/v1/event',eventRoutes);

//app.use('/api/v1/approval',approvaltimeline);


app.get('/ping', (_req, res) => {
  res.send('Pong');
});

app.all('*', (_req, res) => {
    res.status(404).send('OOPS!!! 404 Page Not Found');
  });
  
app.use(errorMiddleware);

  
export default app;