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
  steps: number
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
  steps: number
  status: ProcessStatus
  error?: string
  created: Date
}
