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
