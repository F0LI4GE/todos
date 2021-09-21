import { Router } from 'express';
import Todo from '../../models/todos';

const todos = Router({ mergeParams: true });

todos.get('/', async (req, res) => {
	console.log('get list');
	try {
		const Todos = await Todo.find();
		res.status(200).json(Todos);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

todos.patch('/:id', (req, res) => {});
todos.delete('/:id', (req, res) => {});
todos.post('/', async (req, res) => {
	const todo = new Todo(req.body);
	try {
		await todo.save();
		res.status(201).json(todo);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
});

export default todos;
