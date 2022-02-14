// TODO: Split to setup, trigger, action and element files.

import { TextFileLine } from './import'

/**
 * Default version of the configuration for the RISP setup.
 *
 * @property baseUrl Base address for HTPP requests.
 */
export interface Setup {
  baseUrl?: string
  token?: string
  errorMessage?: (message: string) => void
  successMessage?: (message: string) => void
}

/**
 * A trigger is a data packet initiated by some activity in the application.
 * For example user interaction on UI component. Triggers are mapped to the
 * action handlers when used in RISP.
 */
export type Trigger = OnChangeTrigger | OnClickTrigger | { readonly type: string }

/**
 * This trigger is activated, when value of an input is changed.
 */
export interface OnChangeTrigger {
  readonly type: 'onChange'
  name: string
  value: TriggerValue
}

/**
 * This trigger is activated by clicking on some target.
 */
export interface OnClickTrigger {
  readonly type: 'onClick'
}

/**
 * A parameter collection used when rendering element.
 *
 * @property element Actual top level element to render.
 * @property values A set of values to edit associated with the rendering process.
 * @property setup Global configuration for the rendering system.
 */
export type RenderingProps<SetupType = Setup, ElementType = InteractiveElement> = {
  element: ElementType,
  values: TriggerValues,
  setup: SetupType
}

/**
 * Readability helper to specify that a string is being used as a trigger name.
 */
export type ActionName = string

/**
* Payload of `debug` action.
*/
export interface DebugAction {
  readonly type: 'debug'
}

/**
 * Payload of the `patch` action.
 */
export interface PatchAction {
  readonly type: 'patch'
  url: string
  objectWrapLevel?: number
  errorMessage?: string
  successMessage?: string
}
export function isPatchAction(obj: unknown): obj is PatchAction {
  return typeof obj === 'object' && obj !== null && 'url' in obj && obj['type'] === 'patch'
}

/**
 * Payload of `post` action.
 */
export interface PostAction {
  readonly type: 'post'
  url: string
  objectWrapLevel?: number
  errorMessage?: string
  successMessage?: string
}
export function isPostAction(obj: unknown): obj is PostAction {
  return typeof obj === 'object' && obj !== null && 'url' in obj && obj['type'] === 'post'
}

/**
 * Payload for the action execution.
 */
export type Action = DebugAction | PatchAction | PostAction

/**
 * An action definition collection.
 */
export interface Actions<ActionType = Action> {
  [key: string]: ActionType | ActionType[]
}

/**
 * A result retuned by the action handler.
 */
export type ActionResult = SuccessfulActionResult | FailedActionResult

/**
 * A successful result retuned by the action handler.
 */
export interface SuccessfulActionResult {
  success: true
  result: unknown
}

/**
 * A failure result retuned by the action handler.
 */
export interface FailedActionResult {
  success: false
  message: string
}

/**
 * A function processing an action.
 */
export interface ActionHandler<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> {
  (action: ActionType, props: RenderingProps<SetupType, ElementType>): Promise<ActionResult>
}

/**
 * The handler function is a function converting the trigger data to the action result.
 */
export interface TriggerHandler<SetupType = Setup, ElementType = InteractiveElement> {
  (trigger: Trigger, props: RenderingProps<SetupType, ElementType>): Promise<ActionResult>
}

/**
 * A single payload that the trigger can have, i.e. tigger data.
 */
export type TriggerValue = string | number | boolean | null | TriggerValue[] | TriggerValues

/**
 * A map of names to trigger values.
 */
export interface TriggerValues {
  [key: string]: TriggerValue
}

/**
 * Readability helper to specify that a string is being used as a trigger name.
 */
export type TriggerName = string

/**
 * Generic interface for all elements that can define action handlers.
 */
export interface ActiveElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> {
  readonly type: string
  triggerHandler?: TriggerHandler<SetupType, ElementType>
  actions: Actions<ActionType>
}

export function isActiveElement(object: unknown): object is ActiveElement {
  return typeof object === "object" && object !== null && !!object['actions']
}

/**
 * An element that has a name and a value.
 */
export interface NamedElement {
  readonly type: string
  name: string
  defaultValue?: TriggerValue
  label?: string
}

export function isNamedElement(object: unknown): object is NamedElement {
  return typeof object === "object" && object !== null && 'name' in object
}

/**
 * A boolean toggle element.
 */
export interface BooleanElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
  readonly type: 'boolean'
}

export function isBooleanElement(object: unknown): object is BooleanElement {
  return isActiveElement(object) && object['type'] === 'boolean'
}

/**
 * A boolean element using radio buttons for Yes and No.
 */
export interface YesNoElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
  readonly type: 'yesno'
}

export function isYesNoElement(object: unknown): object is YesNoElement {
  return isActiveElement(object) && object['type'] === 'yesno'
}

/**
 * A text editing element.
 */
export interface TextElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
  readonly type: 'text'
}

export function isTextElement(object: unknown): object is TextElement {
  return isActiveElement(object) && object['type'] === 'text'
}

/**
 * An element activating an action when clicked.
 */
export interface ButtonElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType> {
  readonly type: 'button'
  label: string
}

export function isButtonElement(object: unknown): object is ButtonElement {
  return isActiveElement(object) && object['type'] === 'button'
}

/**
 * An elment that contains other elements.
 */
export interface ContainerElement<ElementType = InteractiveElement> {
  elements: ElementType[]
}

export function isContainerElement(object: unknown): object is ContainerElement {
  return typeof object === "object" && object !== null && object['elements']
}

/**
 * A structural element choosing what to show from the value of some other element.
 */
export interface CaseElement<ElementType = InteractiveElement> {
  readonly type: 'case'
  condition: string
  cases: Record<string, ElementType>
  default?: string
}
export function isCaseElement(object: unknown): object is CaseElement {
  return (typeof object === "object" && object !== null && object['condition'] && object['cases'] &&
    typeof object['cases'] === 'object' && object['cases'] !== null
  )
}

/**
 * A simple element container rendering each contained element one by one as they are.
 */
export interface FlatElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
  readonly type: 'flat'
}

export function isFlatElement(object: unknown): object is FlatElement {
  return isContainerElement(object) && object['type'] === 'flat'
}

/**
 * A container with visible frame around it.
 */
export interface BoxElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
  readonly type: 'box'
  title?: string
}

export function isBoxElement(object: unknown): object is BoxElement {
  return isContainerElement(object) && object['type'] === 'box'
}

/**
 * Generic base class for an element displaying some data content.
 */
export interface ViewElement<DataType> {
  data: DataType
}

/**
 * A HTML element displayed as is.
 */
export interface HtmlElement {
  readonly type: 'html'
  html: string
}

export function isHtmlElement(object: unknown): object is HtmlElement {
  return (typeof object === "object" && object !== null && object['type'] === 'html'
    && 'html' in object && typeof object['html'] === 'string'
  )
}

/**
 * A text message displayed as is.
 */
export interface MessageElement {
  readonly type: 'message'
  severity: 'info' | 'warning' | 'error' | 'success'
  text: string
}

export function isMessageElement(object: unknown): object is MessageElement {
  return (typeof object === "object" && object !== null && object['type'] === 'message'
    && 'severity' in object && ['info', 'warning', 'error', 'success'].includes(object['severity'])
    && 'text' in object && typeof object['text'] === 'string'
  )
}

/**
 * A display for an imported text file line.
 */
export interface TextFileLineElement {
  readonly type: 'textFileLine'
  line: TextFileLine
}

export function isTextFileLineElement(object: unknown): object is TextFileLineElement {
  return (typeof object === "object" && object !== null && object['type'] === 'textFileLine'
    && 'line' in object && typeof object['line'] === 'object' && object['line'] !== null
  )
}

/**
 * A collection of radio buttons.
 */
export interface RadioElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
  readonly type: 'radio'
  options: Record<string, string>
}

export function isRadioElement(object: unknown): object is RadioElement {
  return (isActiveElement(object) && object['type'] === 'radio'
    && 'options' in object && typeof object['options'] === 'object'
  )
}

export type InteractiveElement = BooleanElement | TextElement | HtmlElement | ButtonElement | FlatElement | BoxElement | MessageElement | TextFileLineElement | RadioElement | CaseElement | YesNoElement
