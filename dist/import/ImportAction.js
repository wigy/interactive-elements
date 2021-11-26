"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImportAction = exports.isImportActionConf = exports.isImportActionOp = void 0;
function isImportActionOp(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if ('op' in obj) {
            return ['segmentation', 'classification', 'analysis', 'execution'].includes(obj.op);
        }
    }
    return false;
}
exports.isImportActionOp = isImportActionOp;
function isImportActionConf(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if ('configure' in obj) {
            return typeof obj['configure'] === 'object' && obj['configure'] !== null;
        }
    }
    return false;
}
exports.isImportActionConf = isImportActionConf;
function isImportAction(obj) {
    return isImportActionOp(obj) || isImportActionConf(obj);
}
exports.isImportAction = isImportAction;
