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
export declare type ProcessConfig = Record<string, unknown>;
/**
 * The name of the process.
 */
export declare type ProcessName = string;
/**
  * How the process input data is encoded.
  */
export declare type FileEncoding = 'utf-8' | 'base64' | 'json';
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
export declare type ProcessStatus = 'INCOMPLETE' | 'WAITING' | 'SUCCEEDED' | 'FAILED' | 'CRASHED';
/**
 * An ID for database entries.
 */
export declare type RealID = number;
export declare type ID = RealID | null;
export declare const isRealID: (id: unknown) => id is number;
export declare const isID: (id: unknown) => id is ID;
/**
 * Response for single process step fetch.ProcessStepModelData
 */
export declare type ProcessStepModelData = {
    id: ID;
    processId?: ID;
    number: number;
    started: Date;
    finished: Date;
    handler: string;
    directions: null | Record<string, unknown>;
    action: null | Record<string, unknown>;
    state: Record<string, unknown>;
};
/**
 * Response for process listing.
 */
export declare type ProcessModelData = {
    id: ID;
    ownerId: ID;
    name: ProcessName;
    config: ProcessConfig;
    complete: boolean;
    successful: boolean;
    currentStep: number;
    status: ProcessStatus;
    error?: string;
    created: Date;
};
/**
 * Response for single process fetch.
 */
export declare type ProcessModelDetailedData = {
    id: ID;
    ownerId: ID;
    name: ProcessName;
    config: ProcessConfig;
    complete: boolean;
    successful: boolean;
    currentStep: number;
    steps: ProcessStepModelData[];
    status: ProcessStatus;
    error?: string;
    created: Date;
};
