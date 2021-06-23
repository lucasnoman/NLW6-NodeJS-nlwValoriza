import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';

export const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// Como o controller está recebendo o request e response, não preciso declará-los novamente na rota
router.post('/users', createUserController.handle);
router.post('/tag', createTagController.handle);
