"use strict";
// TODO: Split to setup, trigger, action and element files.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRadioElement = exports.isTextFileLineElement = exports.isMessageElement = exports.isHtmlElement = exports.isBoxElement = exports.isFlatElement = exports.isContainerElement = exports.isButtonElement = exports.isTextElement = exports.isBooleanElement = exports.isNamedElement = exports.isActiveElement = exports.isPostAction = exports.isPatchAction = void 0;
// eslint-disable-next-line
function isPatchAction(obj) {
    return typeof obj === 'object' && 'url' in obj && obj.type === 'patch';
}
exports.isPatchAction = isPatchAction;
// eslint-disable-next-line
function isPostAction(obj) {
    return typeof obj === 'object' && 'url' in obj && obj.type === 'post';
}
exports.isPostAction = isPostAction;
function isActiveElement(object) {
    return typeof object === "object" && object !== null && !!object['actions'];
}
exports.isActiveElement = isActiveElement;
function isNamedElement(object) {
    return typeof object === "object" && object !== null && 'name' in object;
}
exports.isNamedElement = isNamedElement;
function isBooleanElement(object) {
    return isActiveElement(object) && object['type'] === 'boolean';
}
exports.isBooleanElement = isBooleanElement;
function isTextElement(object) {
    return isActiveElement(object) && object['type'] === 'text';
}
exports.isTextElement = isTextElement;
function isButtonElement(object) {
    return isActiveElement(object) && object['type'] === 'button';
}
exports.isButtonElement = isButtonElement;
function isContainerElement(object) {
    return typeof object === "object" && object !== null && !!object['elements'];
}
exports.isContainerElement = isContainerElement;
function isFlatElement(object) {
    return isContainerElement(object) && object['type'] === 'flat';
}
exports.isFlatElement = isFlatElement;
function isBoxElement(object) {
    return isContainerElement(object) && object['type'] === 'box';
}
exports.isBoxElement = isBoxElement;
function isHtmlElement(object) {
    return (typeof object === "object" && object !== null && object['type'] === 'html'
        && 'html' in object && typeof object['html'] === 'string');
}
exports.isHtmlElement = isHtmlElement;
function isMessageElement(object) {
    return (typeof object === "object" && object !== null && object['type'] === 'message'
        && 'severity' in object && ['info', 'warning', 'error', 'success'].includes(object['severity'])
        && 'text' in object && typeof object['text'] === 'string');
}
exports.isMessageElement = isMessageElement;
function isTextFileLineElement(object) {
    return (typeof object === "object" && object !== null && object['type'] === 'textFileLine'
        && 'line' in object && typeof object['line'] === 'object' && object['line'] !== null);
}
exports.isTextFileLineElement = isTextFileLineElement;
function isRadioElement(object) {
    return (isActiveElement(object) && object['type'] === 'radio'
        && 'options' in object && typeof object['options'] === 'object');
}
exports.isRadioElement = isRadioElement;
//# sourceMappingURL=elements.js.map