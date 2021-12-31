import { InteractiveElement, isContainerElement, isNamedElement } from './elements'

/**
 * Collect all names defined in the element structure.
 * @param element
 */
export function elementNames(element: InteractiveElement) {
  if (isContainerElement(element)) {
    const vars = new Set()
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
 * Utility to heuristically convert nessy string to number.
 * @param str
 * @returns
 */
 export function num(str: string): number | typeof NaN {
  str = str.replace(/\s/g, '')
  try {
    if (/,\d+\./.test(str)) {
      str = str.replace(/,/g, '')
    } else if (/\.\d+,/.test(str)) {
      str = str.replace(/\./g, '').replace(/,/, '.')
    } else {
      str = str.replace(',', '.')
    }
    return parseFloat(str)
  } catch(err) {
    return NaN
  }
}
