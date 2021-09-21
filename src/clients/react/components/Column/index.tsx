import React, { FunctionComponent } from 'react';

export const Column: FunctionComponent<ColumnProps> = ({
	columnTitle,
	children,
}) => (
	<section>
		<h2>{columnTitle}</h2>
		<div>{children}</div>
	</section>
);

export type ColumnProps = {
	columnTitle: string;
};
