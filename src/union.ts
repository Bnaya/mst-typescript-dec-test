import {
  types as t,
  Instance,
  _NotCustomized,
  IType
} from "mobx-state-tree";
import { ExtractProps, IAnyModelType, ExtractOthers, ExtractCSTWithoutSTN } from "mobx-state-tree/dist/internal";

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

/**
 * Compare this d.ts
 */
export const ModelD = _ModelD;

/**
 * Compare this d.ts
 */
export const ModelDvariadicUnion = lazyInferenceTypeUnionVariadic(ModelA, ModelB, ModelC);

/**
 * Compare this d.ts
 */
export const ModelDNotLazy = t.union(ModelA, ModelB, ModelC);

type IT = Instance<typeof ModelDvariadicUnion>;
declare const bla: IT;

if ("foo" in bla) {
  bla.foo.anchor
}

function lazyInferenceTypeUnion<
  M1 extends IAnyModelType,
  M2 extends IAnyModelType,
  M3 extends IAnyModelType,
>(m1: M1, m2: M2, m3: M3): LazyInferenceModelType<M1> | LazyInferenceModelType<M2> | LazyInferenceModelType<M3>  {
  return t.union(m1, m2, m3);
}

function lazyInferenceTypeUnionVariadic<
  ARGS extends Array<IAnyModelType>
>(...args: ARGS): LazyInferenceModelType<ARGS[number]>  {
  return t.union(...args);
}

type FilterOnly<T, N> = T extends N ? T : never;

function lazyInferenceTypeUnionVariadic3<
  ARGS extends Array<IAnyModelType>
>(...args: ARGS): ({ [P in FilterOnly<keyof ARGS, number>]: LazyInferenceModelType<ARGS[P]> } )[number] {
  return t.union(...args);
}

type LazyInferenceModelType<T extends IAnyModelType> = IType<ExtractProps<T>, ExtractOthers<T>, ExtractCSTWithoutSTN<T>>;

const result_lazyInferenceTypeUnionVariadic = lazyInferenceTypeUnionVariadic(ModelA, ModelB, ModelC);
const result_lazyInferenceTypeUnionVariadic3 = lazyInferenceTypeUnionVariadic3(ModelA, ModelB, ModelC);
