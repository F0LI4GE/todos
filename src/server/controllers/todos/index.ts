import { Router } from 'express';
import Todo from '../../models/todos';
import { TodoService } from '../../services/TodoService';

const todos = Router({ mergeParams: true });

todos.post('/', async (req, res) => {
	TodoService.addTodo(req.body)
		.then((todo) => res.send(todo))
		.catch((err) => res.send(err));
});

todos.get('/', (req, res) => {
	TodoService.getTodos()
		.then((todos) => res.send(todos))
		.catch((err) => res.send(err));
});

todos.put('/:id', (req, res) => {
	TodoService.updateTodo(req.params.id, req.body)
		.then((todo) => res.send(todo))
		.catch((err) => res.send(err));
});

todos.delete('/:id', (req, res) => {
	TodoService.deleteTodo(req.params.id)
		.then((todo) => res.send(todo))
		.catch((err) => res.send(err));
});

export default todos;
