import {
	__default_includeFullYear,
	__default_separateEach,
	__default_separator
} from './private_constants.js';


export function getDefaultsFor_SeparatorOptions() {
	return {separator: __default_separator, separateEach: __default_separateEach};
}


export function getDefaultsFor_YearSeparatorOptions() {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['includeFullYear'] = __default_includeFullYear;
	return defaults;
}
