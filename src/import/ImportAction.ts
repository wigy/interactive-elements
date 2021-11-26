/**
 * Action for updating process configuration.
 */
 export interface ImportActionOp {
  op: 'segmentation' | 'classification' | 'analysis' | 'execution'
}
export function isImportActionOp(obj: unknown): obj is ImportActionOp {
  if (typeof obj === 'object' && obj !== null) {
    if ('op' in obj) {
      return ['segmentation', 'classification', 'analysis', 'execution'].includes((obj as { op: string}).op)
    }
  }
  return false
}

/**
 * Actions for changing the import phases.
 */
 export interface ImportActionConf {
  configure: Record<string, unknown>
}
export function isImportActionConf(obj: unknown): obj is ImportActionConf {
  if (typeof obj === 'object' && obj !== null) {
    if ('configure' in obj) {
      return typeof obj['configure'] === 'object' && obj['configure'] !== null
    }
  }
  return false
}

/**
 * Import strep as an action.
 */
export type ImportAction = ImportActionOp | ImportActionConf

export function isImportAction(obj: unknown): obj is ImportAction {
  return isImportActionOp(obj) || isImportActionConf(obj)
}
