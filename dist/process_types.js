"use strict";
/**
 * Some utility type definitions for processing.
 *
 * @module interactive-elements/src/process_types
 */
/**
 * Definitions for some process fields.
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isID = exports.isRealID = exports.ProcessStatus = void 0;
/**
 * Overall status of the process.
 *
 *  * INCOMPLETE - Something has stopped the process before it has been finished properly.
 *  * WAITING - The process is currently waiting for external input.
 *  * SUCCEEDED - The process is completed successfully.
 *  * FAILED - The process is completed unsuccessfully.
 *  * CRASHED - A handler has crashed at some point and process is halted.
 *
 * @enum
 */
var ProcessStatus;
(function (ProcessStatus) {
    ProcessStatus["INCOMPLETE"] = "INCOMPLETE";
    ProcessStatus["WAITING"] = "WAITING";
    ProcessStatus["SUCCEEDED"] = "SUCCEEDED";
    ProcessStatus["FAILED"] = "FAILED";
    ProcessStatus["CRASHED"] = "CRASHED";
})(ProcessStatus = exports.ProcessStatus || (exports.ProcessStatus = {}));
const isRealID = (id) => typeof id === 'number';
exports.isRealID = isRealID;
const isID = (id) => (0, exports.isRealID)(id) || id === null;
exports.isID = isID;
//# sourceMappingURL=process_types.js.map