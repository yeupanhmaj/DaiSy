export const gridCols = {
	2: 'grid-cols-2',
	4: 'grid-cols-4',
	8: 'grid-cols-8',
	12: 'grid-cols-12',
	16: 'grid-cols-16'
};

export const gridGap = {
	0: 'gap-0',
	1: 'gap-1',
	2: 'gap-2',
	3: 'gap-3',
	4: 'gap-4'
};

export const getGridClass = (columns, gap) =>
	`${gridCols[columns]} ${gridGap[gap]}`;
