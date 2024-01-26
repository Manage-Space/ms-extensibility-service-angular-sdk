/**
 * ManageSpace Extensibility API
 * ManageSpace Extensibility API Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ExecuteRunRequest { 
    /**
     * Trigger event.
     */
    trigger: ExecuteRunRequest.TriggerEnum;
    /**
     * Message schema
     */
    message: Array<string>;
}
export namespace ExecuteRunRequest {
    export type TriggerEnum = 'CartUpdateRequested' | 'InvoiceUpdateRequested';
    export const TriggerEnum = {
        CartUpdateRequested: 'CartUpdateRequested' as TriggerEnum,
        InvoiceUpdateRequested: 'InvoiceUpdateRequested' as TriggerEnum
    };
}


