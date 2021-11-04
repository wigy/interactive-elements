/**
 * Configuration data for a process.
 */
export type ProcessConfig = Record<string, any>

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
 */
export enum ProcessStatus {
  INCOMPLETE = "INCOMPLETE",
  WAITING = "WAITING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
  CRASHED = "CRASHED"
}
