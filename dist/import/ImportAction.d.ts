/**
 * Action for updating process configuration.
 */
export interface ImportActionOp {
    op: 'segmentation' | 'classification' | 'analysis' | 'execution';
}
export declare function isImportActionOp(obj: unknown): obj is ImportActionOp;
/**
 * Actions for changing the import phases.
 */
export interface ImportActionConf {
    configure: Record<string, unknown>;
}
export declare function isImportActionConf(obj: unknown): obj is ImportActionConf;
/**
 * Import strep as an action.
 */
export declare type ImportAction = ImportActionOp | ImportActionConf;
export declare function isImportAction(obj: unknown): obj is ImportAction;
