import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import { router } from './routes';

import './database';

const app = express();

// Nunca esqueça de usar isso, se não, o express não aceitará os HTTP request REST
app.use(express.json());

// Quando quero usar rotas em um arquivo separado, só preciso importar e usá-las assim
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
);

app.listen('3333', () => console.log('🌐 server is running!'));
