"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ## Importing
 *
 * This module has types used in the importing data to the system using Interactive Stateful Process.
 *
 * ### Importing Process
 *
 * The import processing goes through the following stages:
 *
 * ```mermaid
 * flowchart LR
 *    START --> segmentation
 *    segmentation --> classification
 *    classification --> analyze
 *    analyze --> execution
 *    execution --> END
 * ```
 *
 * 1. **Segmentation**: Split incoming data to smaller pieces so that parts of the original data are grouped
 *    together under unique *segmentation ID*. Each group present some meaningful unit of information
 *    belonging together called *segment*.
 * 2. **Classification**: For each segment, determine which *class* it belongs to. Classes are some
 *    defined set of qualities describing similar segments.
 * 3. **Analyze**: Based on the classification, additional information can be collected and/or calculated
 *    for each segment.
 * 4. **Execution**: Once information for each segment is complete, we can execute database insertions,
 *    REST API calls or whatever appropriate actions based on the segement data.
 *
 * @module interactive-elements/src/import
 */
__exportStar(require("./ImportAction"), exports);
__exportStar(require("./ImportCSVOptions"), exports);
__exportStar(require("./ImportElement"), exports);
__exportStar(require("./ImportState"), exports);
__exportStar(require("./TextFileLine"), exports);
//# sourceMappingURL=index.js.map