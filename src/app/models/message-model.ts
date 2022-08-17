export class MessageModel {

    // fields
    message?: string;
    type?: MessageTypes;
    expired?: boolean;
}

// types
export enum MessageTypes {
    Success = 1,
    Error = 2
}