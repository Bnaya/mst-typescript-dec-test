import { IModelType, Instance, _NotCustomized, ISimpleType } from "mobx-state-tree";
declare const ModelAInferred: IModelType<{
    foo: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
declare type DirectExtendHelper<T> = T;
interface ModelAFactoryInterface extends DirectExtendHelper<typeof ModelAInferred> {
}
export declare const ModelA: ModelAFactoryInterface;
export interface IModelAStore extends Instance<ModelAFactoryInterface> {
}
declare const ModelBInferred: IModelType<{
    a: ModelAFactoryInterface;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelBFactoryInterface extends DirectExtendHelper<typeof ModelBInferred> {
}
export declare const ModelB: ModelBFactoryInterface;
export interface IModelBStore extends Instance<ModelBFactoryInterface> {
}
export {};
