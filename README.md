# SeparatorOptions

A TypeScript interface:  
`{separator?: string,  separateEach?: boolean}`

# YearSeparatorOptions

A TypeScript interface extending SeparatorOptions and adding this:  
`{includeFullYear?: boolean}`

# getDefaultsFor_SeparatorOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SeparatorOptions

Returns default values of SeparatorOptions.

# getDefaultsFor_YearSeparatorOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YearSeparatorOptions

Returns default values of YearSeparatorOptions.



## Installation
`npm i  @writetome51/separator-year-options`

## Loading
```ts
// if using TypeScript:
import {SeparatorOptions, YearSeparatorOptions, 
    getDefaultsFor_SeparatorOptions, getDefaultsFor_YearSeparatorOptions} 
        from '@writetome51/separator-year-options';
```
