import { InteractiveElement } from './elements';
/**
 * Collect all names defined in the element structure.
 * @param element
 */
export declare function elementNames<ElementType = InteractiveElement>(element: ElementType): Set<string>;
/**
 * Utility to heuristically convert nessy string to number.
 * @param str
 * @returns
 */
export declare function num(str: string): number | typeof NaN;
