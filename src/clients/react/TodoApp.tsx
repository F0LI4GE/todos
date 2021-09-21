import React, { FunctionComponent } from 'react';

import { Column } from './components/column/index';
import { TodoCard } from './components/TodoCard/index';

import './styles/normalize.css';
import './styles/common.css';

export const TodoApp: FunctionComponent = () => {
	return (
		<div className="page-wrapper">
			<Column columnTitle="TODO">
				<TodoCard todoTitle="Grid" content="make basic grid" />
				<TodoCard todoTitle="TodoCard css" content="style TodoCard" />
				<TodoCard todoTitle="TodoCard css" content="style TodoCard" />
			</Column>
			{/* <Column columnTitle="IN PROGRESS">
				<TodoCard todoTitle="Grid" content="make basic grid" />
				<TodoCard todoTitle="TodoCard css" content="style TodoCard" />
				<TodoCard todoTitle="TodoCard css" content="style TodoCard" />
			</Column>
			<Column columnTitle="DONE">
				<TodoCard todoTitle="Grid" content="make basic grid" />
				<TodoCard todoTitle="TodoCard css" content="style TodoCard" />
				<TodoCard todoTitle="TodoCard css" content="style TodoCard" />
			</Column> */}
		</div>
	);
};
