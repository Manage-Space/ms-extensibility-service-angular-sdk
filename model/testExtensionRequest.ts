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


export interface TestExtensionRequest { 
    /**
     * Extension name.
     */
    name: string;
    /**
     * Initial data(if first step).
     */
    initialData?: object;
    /**
     * State.
     */
    state?: object;
    /**
     * Ports (optional project steps).
     */
    ports?: object;
}

