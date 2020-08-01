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

const ModelCInferred = t.model({
  // using that will create another declaration!
  // b: ModelBInferred
  b: ModelB
});
type ModelCFactoryType = typeof ModelCInferred;
interface ModelCFactoryInterface extends ModelCFactoryType {}
export const ModelC: ModelCFactoryInterface = ModelCInferred; 
export interface IModelCStore extends Instance<ModelCFactoryInterface> {}