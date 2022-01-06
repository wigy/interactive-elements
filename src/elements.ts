// TODO: Split to setup, trigger, action and element files.
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
  errorMessage?: string
  successMessage?: string
}
// eslint-disable-next-line
export function isPatchAction(obj: any): obj is PatchAction {
return typeof obj === 'object' && 'url' in obj && obj.type === 'patch'
}

/**
 * Payload of `post` action.
 */
 export interface PostAction {
  readonly type: 'post'
  url: string
  errorMessage?: string
  successMessage?: string
}
// eslint-disable-next-line
export function isPostAction(obj: any): obj is PostAction {
  return typeof obj === 'object' && 'url' in obj && obj.type === 'post'
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
  label?: string
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
export interface BooleanElement <SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
  readonly type: string
}

export function isBooleanElement(object: unknown): object is BooleanElement {
  return typeof object === "object" && object !== null && object['type'] === 'boolean'
}

/**
 * A text editing element.
 */
export interface TextElement <SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType>, NamedElement {
  readonly type: string
}

export function isTextElement(object: unknown): object is TextElement {
  return typeof object === "object" && object !== null && object['type'] === 'text'
}

/**
 * An element activating an action when clicked.
 */
export interface ButtonElement<SetupType = Setup, ElementType = InteractiveElement, ActionType = Action> extends ActiveElement<SetupType, ElementType, ActionType> {
  readonly type: string
  label: string
}

export function isButtonElement(object: unknown): object is ButtonElement {
  return typeof object === "object" && object !== null && object['type'] === 'button'
}

/**
 * An elment that contains other elements.
 */
export interface ContainerElement<ElementType = InteractiveElement> {
  elements: ElementType[]
}

export function isContainerElement(object: unknown): object is ContainerElement {
  return typeof object === "object" && object !== null && !!object['elements']
}

/**
 * A simple element container rendering each contained element one by one in DIV.
 */
export interface FlatElement<ElementType = InteractiveElement> extends ContainerElement<ElementType> {
  readonly type: string
}

export function isFlatElement(object: unknown): object is FlatElement {
  return typeof object === "object" && object !== null && object['type'] === 'flat'
}

/**
 * Generic base class for an element displaying some data content.
 */
export interface ViewElement<DataType> {
  data: DataType
}

/**
 * A text message displayed as is.
 */
export interface MessageElement {
  readonly type: string
  severity: 'info' | 'warning' | 'error' | 'success'
  text: string
}

export function isMessageElement(object: unknown): object is MessageElement {
  return (typeof object === "object" && object !== null && object['type'] === 'message'
    && 'severity' in object && ['info', 'warning', 'error', 'success'].includes(object['severity'])
    && 'text' in object && typeof object['text'] === 'string'
  )
}

export type InteractiveElement = BooleanElement | TextElement | ButtonElement | FlatElement | MessageElement
