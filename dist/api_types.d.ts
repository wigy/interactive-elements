import { ProcessConfig, ProcessName, ProcessStatus } from "./process_types";
/**
 * An ID for database entries.
 */
export declare type ID = number | null;
/**
 * Response for process listing.
 */
export declare type GetAllProcessesApiResponse = {
    id: ID;
    ownerId: ID;
    name: ProcessName;
    config: ProcessConfig;
    complete: boolean;
    successful: boolean;
    currentStep: number;
    steps: number;
    status: ProcessStatus;
    error?: string;
    created: Date;
}[];
/**
 * Response for single process fetch.
 */
export declare type GetOneProcessResponse = {
    id: ID;
    ownerId: ID;
    name: ProcessName;
    config: ProcessConfig;
    complete: boolean;
    successful: boolean;
    currentStep: number;
    steps: number;
    status: ProcessStatus;
    error?: string;
    created: Date;
};
/**
 * Response for single process step fetch.
 */
export declare type GetOneStepResponse = {
    id: ID;
    processId: ID;
    number: number;
    started: Date;
    finished: Date;
    handler: string;
    directions: null | Record<string, unknown>;
    action: null | Record<string, unknown>;
    state: Record<string, unknown>;
};
