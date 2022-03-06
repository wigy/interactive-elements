"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPostAction = exports.isPatchAction = void 0;
function isPatchAction(obj) {
    return typeof obj === 'object' && obj !== null && 'url' in obj && obj['type'] === 'patch';
}
exports.isPatchAction = isPatchAction;
function isPostAction(obj) {
    return typeof obj === 'object' && obj !== null && 'url' in obj && obj['type'] === 'post';
}
exports.isPostAction = isPostAction;
//# sourceMappingURL=actions.js.map