/**
 * Some utility type definitions for processing.
 *
 * @module interactive-elements/src/process_types
 */
/**
 * Definitions for some process fields.
 *
 * @module
 */

/**
 * Configuration data for a process.
 */
export type ProcessConfig = Record<string, unknown>

/**
 * The name of the process.
 */

export type ProcessName = string

/**
  * How the process input data is encoded.
  */
export type FileEncoding = 'utf-8' | 'base64' | 'json'

/**
 * Overall status of the process.
 *
 *  * INCOMPLETE - Something has stopped the process before it has been finished properly.
 *  * WAITING - The process is currently waiting for external input.
 *  * SUCCEEDED - The process is completed successfully.
 *  * FAILED - The process is completed unsuccessfully.
 *  * CRASHED - A handler has crashed at some point and process is halted.
 *
 * @enum
 */
export enum ProcessStatus {
  INCOMPLETE = "INCOMPLETE",
  WAITING = "WAITING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
  CRASHED = "CRASHED"
}

/**
 * An ID for database entries.
 */
export type ID = number | null
export type RealID = number

/**
 * Response for process listing.
 */
export type GetAllProcessesApiResponse = {
  id: ID
  ownerId: ID
  name: ProcessName
  config: ProcessConfig
  complete: boolean
  successful: boolean
  currentStep: number
  status: ProcessStatus
  error?: string
  created: Date
}[]

/**
 * Response for single process fetch.
 */
export type GetOneProcessResponse = {
  id: ID
  ownerId: ID
  name: ProcessName
  config: ProcessConfig
  complete: boolean
  successful: boolean
  currentStep: number
  steps: {
    id: ID
    action: Record<string, unknown>
    directions: Record<string, unknown>
    number: number
    started: Date
    finished: Date
  }[]
  status: ProcessStatus
  error?: string
  created: Date
}

/**
 * Response for single process step fetch.
 */
export type GetOneStepResponse = {
  id: ID
  processId: ID
  number: number
  started: Date
  finished: Date
  handler: string
  directions: null | Record<string, unknown>
  action: null | Record<string, unknown>
  state: Record<string, unknown>
}
