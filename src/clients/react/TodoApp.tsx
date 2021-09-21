import React, { FunctionComponent } from 'react';

import './styles/common/normalize.css';
import './styles/common/common.css';
import { Column } from './components/column/index';

export const TodoApp: FunctionComponent = () => {
	return (
		<div className="page-wrapper">
			<Column columnTitle="TODO">PRIVET</Column>
		</div>
	);
};
