export interface SeparatorOptions {
    separator?: string;
    separateEach?: boolean;
}
export interface YearSeparatorOptions extends SeparatorOptions {
    includeFullYear?: boolean;
}
export declare function getDefaultsFor_SeparatorOptions(): SeparatorOptions;
export declare function getDefaultsFor_YearSeparatorOptions(): YearSeparatorOptions;
