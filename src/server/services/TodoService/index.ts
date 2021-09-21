import TodoModel, { Todo } from '../../models/todos';

export class TodoService {
	static addTodo(todoBody: Todo): Promise<void> {
		const todo = new TodoModel(todoBody);
		return todo.save();
	}

	static getTodos(): Promise<Todo[]> {
		return TodoModel.find();
	}

	static updateTodo(id: string, todo: Todo): Promise<void> {
		return TodoModel.findByIdAndUpdate(id, todo);
	}

	static deleteTodo(id: string): Promise<void> {
		return TodoModel.findByIdAndRemove(id);
	}
}
