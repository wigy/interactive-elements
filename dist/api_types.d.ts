import { ProcessConfig, ProcessName, ProcessStatus } from "./process_types";
/**
 * An ID for database entries.
 */
export declare type ID = number | null;
export declare type GetApiResponse = {
    id: ID;
    ownerId: ID;
    name: ProcessName;
    config: ProcessConfig;
    complete: boolean;
    successful?: boolean;
    currentStep?: number;
    steps?: number;
    status: ProcessStatus;
    error?: string;
    created: Date;
};
