import {
  types as t,
  Instance,
  _NotCustomized,
  IType
} from "mobx-state-tree";
import { ExtractProps, IAnyModelType, ExtractOthers, ExtractCSTWithoutSTN, IModelType } from "mobx-state-tree/dist/internal";

t.compose

type ForDirectExtend<T> = T;

const _ModelA = t.model({
  foo: t.string
});

interface ModelAFactoryInterface extends ForDirectExtend<typeof _ModelA> { }
export const ModelA: ModelAFactoryInterface = _ModelA;

const _ModelB = t.model({
  bar: t.number
});

interface ModelBFactoryInterface extends ForDirectExtend<typeof _ModelB> { }
export const ModelB: ModelBFactoryInterface = _ModelB;

export const _ModelC = t.model({
  a: ModelA
});

interface ModelCFactoryInterface extends ForDirectExtend<typeof _ModelC> { }
export const ModelC: ModelCFactoryInterface = _ModelC;

const _ModelD = lazyInferenceTypeUnion(ModelA, ModelB, ModelC);
export const ModelE = lazyInferenceTypeCompose(ModelA, ModelB, ModelC);

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
  >(m1: M1, m2: M2, m3: M3): LazyInferenceModelType<M1> | LazyInferenceModelType<M2> | LazyInferenceModelType<M3> {
  return t.union(m1, m2, m3);
}

function lazyInferenceTypeCompose<
  M1 extends IAnyModelType,
  M2 extends IAnyModelType,
  M3 extends IAnyModelType,
  >(m1: M1, m2: M2, m3: M3): LazyComposeModelsTypes<M1, M2, M3> {
  return t.compose(m1, m2, m3);
}

function lazyInferenceTypeComposeVariadic<
ARGS extends Array<IAnyModelType>
  >(...args: ARGS): IModelType<
  ExtractProps<ARGS[any]>,
  ExtractOthers<ARGS[any]>,
  ExtractCSTWithoutSTN<ARGS[any]>
> {
    // @ts-ignore
  return t.compose(...args);
}

const LALALALA = lazyInferenceTypeComposeVariadic(ModelA, ModelB, ModelC);

export declare const lazyComposedVar: Instance<typeof ModelE>;


function lazyInferenceTypeUnionVariadic<
  ARGS extends Array<IAnyModelType>
>(...args: ARGS): LazyInferenceModelType<ARGS[number]> {
  return t.union(...args);
}

type FilterOnly<T, N> = T extends N ? T : never;

function lazyInferenceTypeUnionVariadic3<
  ARGS extends Array<IAnyModelType>
>(...args: ARGS): ({ [P in FilterOnly<keyof ARGS, number>]: LazyInferenceModelType<ARGS[P]> })[number] {
  return t.union(...args);
}

type LazyInferenceModelType<T extends IAnyModelType> = IType<ExtractProps<T>, ExtractOthers<T>, ExtractCSTWithoutSTN<T>>;

type LazyComposeModelsTypes<
  T1 extends IAnyModelType,
  T2 extends IAnyModelType,
  T3 extends IAnyModelType
> = IModelType<
  ExtractProps<T1> & ExtractProps<T2> & ExtractProps<T3>,
  ExtractOthers<T1> & ExtractOthers<T2> & ExtractOthers<T3>,
  ExtractCSTWithoutSTN<T1> & ExtractCSTWithoutSTN<T2> & ExtractCSTWithoutSTN<T3>
>;

type LazyComposeModelsTypesVariadic<
  T1 extends IAnyModelType,
  T2 extends IAnyModelType,
  T3 extends IAnyModelType
> = IModelType<
  ExtractProps<T1> & ExtractProps<T2> & ExtractProps<T3>,
  ExtractOthers<T1> & ExtractOthers<T2> & ExtractOthers<T3>,
  ExtractCSTWithoutSTN<T1> & ExtractCSTWithoutSTN<T2> & ExtractCSTWithoutSTN<T3>
>;


const result_lazyInferenceTypeUnionVariadic = lazyInferenceTypeUnionVariadic(ModelA, ModelB, ModelC);
const result_lazyInferenceTypeUnionVariadic3 = lazyInferenceTypeUnionVariadic3(ModelA, ModelB, ModelC);
