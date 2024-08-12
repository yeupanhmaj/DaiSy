const variantClass = {
	primary: 'checkbox-primary',
	secondary: 'checkbox-secondary',
	accent: 'checkbox-accent',
	info: 'checkbox-info',
	success: 'checkbox-success',
	warning: 'checkbox-warning',
	error: 'checkbox-error'
};

const sizeClass = {
	xs: 'checkbox-xs',
	sm: 'checkbox-sm',
	md: 'checkbox-md',
	lg: 'checkbox-lg',
	xl: 'checkbox-xl'
};

export const getCheckboxClass = (
	variant,
	size
) => {
	return `${variantClass[variant]} ${sizeClass[size]}`;
};
