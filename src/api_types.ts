import { ProcessConfig, ProcessName, ProcessStatus } from "./process_types"

/**
 * An ID for database entries.
 */
export type ID = number | null

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
