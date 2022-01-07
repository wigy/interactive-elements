"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImportAction = exports.isImportAnswerAction = exports.isImportConfigureAction = exports.isImportOpAction = void 0;
function isImportOpAction(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if ('op' in obj) {
            return ['segmentation', 'classification', 'analysis', 'execution'].includes(obj.op);
        }
    }
    return false;
}
exports.isImportOpAction = isImportOpAction;
function isImportConfigureAction(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if ('configure' in obj) {
            return typeof obj['configure'] === 'object' && obj['configure'] !== null;
        }
    }
    return false;
}
exports.isImportConfigureAction = isImportConfigureAction;
function isImportAnswerAction(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if ('answer' in obj) {
            return typeof obj['answer'] === 'object' && obj['answer'] !== null;
        }
    }
    return false;
}
exports.isImportAnswerAction = isImportAnswerAction;
function isImportAction(obj) {
    return isImportOpAction(obj) || isImportConfigureAction(obj) || isImportAnswerAction(obj);
}
exports.isImportAction = isImportAction;
