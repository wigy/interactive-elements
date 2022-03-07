/**
 * Utility functions for interactive processes.
 *
 * @module interactive-elements/src/utils
 */

import { InteractiveElement, isContainerElement, isNamedElement } from './risp'

/**
 * Collect all names defined in the element structure.
 * @returns
 * All {@link ContainerElement | container elements} are scanned recursively and names of the {@link NamedElement | named elements}
 * are collected.
 */
export function elementNames<ElementType=InteractiveElement>(element: ElementType): Set<string> {
  if (isContainerElement(element)) {
    const vars = new Set<string>()
    for (const sub of element.elements) {
      for (const name of elementNames(sub)) {
        vars.add(name)
      }
    }
    return vars
  } else if (isNamedElement(element)) {
    return new Set([element.name])
  }
  return new Set()
}

/**
 * Utility to heuristically convert a messy string to number.
 * @returns
 * The string is stripped off extra spaces and all but last punctuation.
 */
 export function num(str: string): number | typeof NaN {
  str = str.replace(/\s/g, '')
  try {
    if (/,\d+\./.test(str)) {
      str = str.replace(/,/g, '')
    } else if (/\.\d+,/.test(str)) {
      str = str.replace(/\./g, '').replace(/,/, '.')
    } else if (/^\d+[,.]\d\d\d$/.test(str)) {
      str = str.replace(/[,.]/g, '')
    } else {
      str = str.replace(',', '.')
    }
    return parseFloat(str)
  } catch(err) {
    return NaN
  }
}
