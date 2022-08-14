import { IResponse } from "./abstractions/response";

export class ResponseModel implements IResponse {
    success?: boolean;
    text?: string;

}
