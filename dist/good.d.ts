import { IModelType, Instance, _NotCustomized, ISimpleType } from "mobx-state-tree";
declare const ModelAInferred: IModelType<{
    foo: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
declare type DirectExtendHelper<T> = T;
/**
 * Here we name ModelAInferred inferred type information
 */
interface ModelAFactoryType extends DirectExtendHelper<typeof ModelAInferred> {
}
/**
 * We mask ModelAInferred behind it's named type information
 */
export declare const ModelA: ModelAFactoryType;
declare const ModelBInferred: IModelType<{
    /**
     * No Duplication here!
     */
    a: ModelAFactoryType;
}, {}, _NotCustomized, _NotCustomized>;
/**
 * Here we name ModelBInferred inferred type information
 */
interface ModelBFactoryType extends DirectExtendHelper<typeof ModelBInferred> {
}
/**
 * We mask ModelBInferred behind it's named type information
 */
export declare const ModelB: ModelBFactoryType;
export interface ModelAInstance extends Instance<ModelAFactoryType> {
}
export interface ModelBInstance extends Instance<ModelBFactoryType> {
}
export {};
