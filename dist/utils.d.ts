import { InteractiveElement } from './elements';
/**
 * Collect all names defined in the element structure.
 * @param element
 */
export declare function elementNames(element: InteractiveElement): Set<unknown>;
/**
 * Utility to heuristically convert nessy string to number.
 * @param str
 * @returns
 */
export declare function num(str: string): number | typeof NaN;
