import { __default_includeFullYear, __default_separateEach, __default_separator }
	from './private_constants';


export interface SeparatorOptions {
	separator?: string,
	separateEach?: boolean
}


export interface YearSeparatorOptions extends SeparatorOptions {
	includeFullYear?: boolean
}


export function getDefaultsFor_SeparatorOptions(): SeparatorOptions {
	return {separator: __default_separator, separateEach: __default_separateEach};
}


export function getDefaultsFor_YearSeparatorOptions(): YearSeparatorOptions {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['includeFullYear'] = __default_includeFullYear;
	return defaults;
}
