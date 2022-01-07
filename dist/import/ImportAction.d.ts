/**
 * Action for updating process configuration.
 */
export interface ImportOpAction {
    op: 'segmentation' | 'classification' | 'analysis' | 'execution';
}
export declare function isImportOpAction(obj: unknown): obj is ImportOpAction;
/**
 * Actions for changing the import phases.
 */
export interface ImportConfigureAction {
    configure: Record<string, unknown>;
}
export declare function isImportConfigureAction(obj: unknown): obj is ImportConfigureAction;
/**
 * Actions for responding to questions.
 */
export interface ImportAnswerAction {
    answer: Record<string, unknown>;
}
export declare function isImportAnswerAction(obj: unknown): obj is ImportAnswerAction;
/**
 * Import strep as an action.
 */
export declare type ImportAction = ImportOpAction | ImportConfigureAction;
export declare function isImportAction(obj: unknown): obj is ImportAction;
