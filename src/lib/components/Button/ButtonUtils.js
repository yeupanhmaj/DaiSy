export const sizeClass = {
	xs: 'btn-xs',
	sm: 'btn-sm',
	md: 'btn-md',
	lg: 'btn-lg'
};

export const getSizeClass = (size) =>
	sizeClass[size];

export const variantClass = {
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	accent: 'btn-accent',
	info: 'btn-info',
	success: 'btn-success',
	warning: 'btn-warning',
	error: 'btn-error'
};

export const getVariantClass = (variant) =>
	variantClass[variant];
