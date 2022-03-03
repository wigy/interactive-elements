/**
 * Utility functions for interactive processes.
 *
 * @module interactive-elements/src/utils
 */
import { InteractiveElement } from './elements';
/**
 * Collect all names defined in the element structure.
 * @returns
 * All {@link ContainerElement | container elements} are scanned recursively and names of the {@link NamedElement | named elements}
 * are collected.
 */
export declare function elementNames<ElementType = InteractiveElement>(element: ElementType): Set<string>;
/**
 * Utility to heuristically convert a messy string to number.
 * @returns
 * The string is stripped off extra spaces and all but last punctuation.
 */
export declare function num(str: string): number | typeof NaN;
