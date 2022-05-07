// @fileName Abi.Storage.Spec
// @version 0.0.1

/**
* @interface AbiItem
* 
*/
export interface AbiItem {
    anonymous?: boolean;
    constant?: boolean;
    inputs?: AbiInput[];
    name?: string;
    outputs?: AbiOutput[];
    payable?: boolean;
    stateMutability?: string;
    type: string;
}

/**
* @interface AbiInput
* 
*/
export interface AbiInput {
    name: string;
    type: string;
    indexed?: boolean;
    components?: AbiInput[];
}

/**
* @interface AbiOutput
* 
*/
export interface AbiOutput {
    name: string;
    type: string;
    components?: AbiOutput[];
}
