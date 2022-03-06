import { RenderingProps } from './rendering';
import { ActionResult } from './actions';
import { InteractiveElement } from './elements';
import { Setup } from './setup';
/**
 * A single payload that the trigger can have, i.e. tigger data.
 */
export declare type TriggerValue = string | number | boolean | null | TriggerValue[] | TriggerValues;
/**
 * A map of names to trigger values.
 */
export interface TriggerValues {
    [key: string]: TriggerValue;
}
/**
 * Readability helper to specify that a string is being used as a trigger name.
 */
export declare type TriggerName = string;
/**
* A trigger is a data packet initiated by some activity in the application.
* For example user interaction on UI component. Triggers are mapped to the
* action handlers when used in RISP.
*/
export declare type Trigger = OnChangeTrigger | OnClickTrigger | {
    readonly type: string;
};
/**
 * This trigger is activated, when value of an input is changed.
 */
export interface OnChangeTrigger {
    readonly type: 'onChange';
    name: string;
    value: TriggerValue;
}
/**
 * This trigger is activated by clicking on some target.
 */
export interface OnClickTrigger {
    readonly type: 'onClick';
}
/**
 * The handler function is a function converting the trigger data to the action result.
 */
export interface TriggerHandler<SetupType = Setup, ElementType = InteractiveElement> {
    (trigger: Trigger, props: RenderingProps<SetupType, ElementType>): Promise<ActionResult>;
}
