"use strict";
/**
 * Utility functions for interactive processes.
 *
 * @module interactive-elements/src/utils
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = exports.elementNames = void 0;
const risp_1 = require("./risp");
/**
 * Collect all names defined in the element structure.
 * @returns
 * All {@link ContainerElement | container elements} are scanned recursively and names of the {@link NamedElement | named elements}
 * are collected.
 */
function elementNames(element) {
    if ((0, risp_1.isContainerElement)(element)) {
        const vars = new Set();
        for (const sub of element.elements) {
            for (const name of elementNames(sub)) {
                vars.add(name);
            }
        }
        return vars;
    }
    else if ((0, risp_1.isNamedElement)(element)) {
        return new Set([element.name]);
    }
    return new Set();
}
exports.elementNames = elementNames;
/**
 * Utility to heuristically convert a messy string to number.
 * @returns
 * The string is stripped off extra spaces and all but last punctuation.
 */
function num(str) {
    str = str.replace(/\s/g, '');
    try {
        if (/,\d+\./.test(str)) {
            str = str.replace(/,/g, '');
        }
        else if (/\.\d+,/.test(str)) {
            str = str.replace(/\./g, '').replace(/,/, '.');
        }
        else {
            str = str.replace(',', '.');
        }
        return parseFloat(str);
    }
    catch (err) {
        return NaN;
    }
}
exports.num = num;
//# sourceMappingURL=utils.js.map