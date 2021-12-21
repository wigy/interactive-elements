"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementNames = void 0;
const elements_1 = require("./elements");
/**
 * Collect all names defined in the element structure.
 * @param element
 */
function elementNames(element) {
    if ((0, elements_1.isContainerElement)(element)) {
        const vars = new Set();
        for (const sub of element.elements) {
            for (const name of elementNames(sub)) {
                vars.add(name);
            }
        }
        return vars;
    }
    else if ((0, elements_1.isNamedElement)(element)) {
        return new Set([element.name]);
    }
    return new Set();
}
exports.elementNames = elementNames;
