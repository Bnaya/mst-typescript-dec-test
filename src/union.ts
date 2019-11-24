import {
  types as t,
  IModelType,
  Instance,
  _NotCustomized,
  ISimpleType,
  ModelPropertiesDeclaration,
  IType
} from "mobx-state-tree";
import { ExtractProps, IAnyModelType, ExtractOthers, ITypeUnion, ExtractCSTWithoutSTN } from "mobx-state-tree/dist/internal";

type ForDirectExtend<T> = T;

const _ModelA = t.model({
  foo: t.string
});

interface ModelAFactoryInterface extends ForDirectExtend<typeof _ModelA> {}
export const ModelA: ModelAFactoryInterface = _ModelA;

const _ModelB = t.model({
  bar: t.number
});

interface ModelBFactoryInterface extends ForDirectExtend<typeof _ModelB> {}
export const ModelB: ModelBFactoryInterface = _ModelB;

export const _ModelC = t.model({
  a: ModelA
});

interface ModelCFactoryInterface extends ForDirectExtend<typeof _ModelC> {}
export const ModelC: ModelCFactoryInterface = _ModelC;

const _ModelD = lazyInferenceTypeUnion(ModelA, ModelB, ModelC);

export const ModelD = _ModelD;

type CT = typeof ModelD.CreationType

type IT = Instance<typeof ModelD>;
declare const bla: IT;

if ("foo" in bla) {
  bla.foo
}

function lazyInferenceTypeUnion<
  M1 extends IAnyModelType,
  M2 extends IAnyModelType,
  M3 extends IAnyModelType,
>(m1: M1, m2: M2, m3: M3): LazyInferenceModelType<M1> | LazyInferenceModelType<M2> | LazyInferenceModelType<M3>  {
  return t.union(m1, m2, m3);
}

type LazyInferenceModelType<T extends IAnyModelType> = IType<ExtractProps<T>, ExtractOthers<T>, ExtractCSTWithoutSTN<T>>;

// ExtractProps<M1> | ExtractProps<M2>