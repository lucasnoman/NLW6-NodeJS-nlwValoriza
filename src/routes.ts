import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middleware/ensureAdmin';

export const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// o middleware ensureAdmin pode ser usado antes das rotas ou dentro de cada uma delas
// caso seja necessário funcionar em apenas uma rota específica
router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
