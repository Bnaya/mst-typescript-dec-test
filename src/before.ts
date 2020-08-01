import {
    types as t,
    IModelType,
    Instance,
    _NotCustomized,
    ISimpleType
} from "mobx-state-tree";

const ModelAInferred = t.model({
    foo: t.string
});

type DirectExtendHelper<T> = T;

interface ModelAFactoryInterface extends DirectExtendHelper<typeof ModelAInferred> {}
export const ModelA: ModelAFactoryInterface = ModelAInferred;
export interface IModelAStore extends Instance<ModelAFactoryInterface> {}

const ModelBInferred = t.model({
    a: ModelA
});

interface ModelBFactoryInterface extends DirectExtendHelper<typeof ModelBInferred> {}
export const ModelB: ModelBFactoryInterface = ModelBInferred;
export interface IModelBStore extends Instance<ModelBFactoryInterface> {}