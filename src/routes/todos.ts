import { Router } from 'express';
import TodoController from '../controllers/todoController';
import todoControllerUser from '../controllers/todoControllerUser';

const router = Router();
//AULA
router.get('/todos', TodoController.getTodos);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

//USUARIO
router.get('/user', todoControllerUser.getTodosUser);
router.post('/createUser', todoControllerUser.createTodoUser);
router.put('/editUser/:id', todoControllerUser.updateTodoUser);
router.delete('/deleteUser/:id', todoControllerUser.deleteTodoUser);

export default router;