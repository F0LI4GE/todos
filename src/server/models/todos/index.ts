import { Schema, model } from 'mongoose';

export type Todo = {
	_id: string;
	title: string;
	content?: string;
	completed?: boolean;
};

const todoSchema = new Schema<Todo>(
	{
		title: {
			type: String,
			required: true,
		},
		content: String,
	},
	{ timestamps: true },
);

const Todo = model('Todo', todoSchema);
export default Todo;
