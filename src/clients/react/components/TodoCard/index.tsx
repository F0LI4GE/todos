import React, { FunctionComponent } from 'react';

import './index.css';

export const TodoCard: FunctionComponent<TodoCardProps> = ({
	todoTitle,
	content,
}) => (
	<div className="todo-card">
		<button>-</button>
		<h3>{todoTitle}</h3>
		<div>{content}</div>
	</div>
);

export type TodoCardProps = {
	todoTitle: string;
	content: string;
};
