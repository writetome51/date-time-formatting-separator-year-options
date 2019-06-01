"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var private_constants_1 = require("./private_constants");
function getDefaultsFor_SeparatorOptions() {
    return { separator: private_constants_1.__default_separator, separateEach: private_constants_1.__default_separateEach };
}
exports.getDefaultsFor_SeparatorOptions = getDefaultsFor_SeparatorOptions;
function getDefaultsFor_YearSeparatorOptions() {
    var defaults = getDefaultsFor_SeparatorOptions();
    defaults['includeFullYear'] = private_constants_1.__default_includeFullYear;
    return defaults;
}
exports.getDefaultsFor_YearSeparatorOptions = getDefaultsFor_YearSeparatorOptions;
