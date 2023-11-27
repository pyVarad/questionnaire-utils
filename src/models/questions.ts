export interface Questions {
    type: string;
    name: string;
    message: string;
    default?: string;
    choices?: string[];
    validate?: (input: any) => boolean;
    next?: Questions[];
}
