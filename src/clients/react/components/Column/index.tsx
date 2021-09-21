import React, { FunctionComponent } from 'react';

import './index.css';

export const Column: FunctionComponent<ColumnProps> = ({
	columnTitle,
	children,
}) => (
	<section className="column">
		<h2>{columnTitle}</h2>
		<ul className="todo-list">{children}</ul>
		<button>+</button>
	</section>
);

export type ColumnProps = {
	columnTitle: string;
};
