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

/**
 * Here we name ModelAInferred inferred type information
 */
interface ModelAFactoryType extends DirectExtendHelper<typeof ModelAInferred> {}

/**
 * We mask ModelAInferred behind it's named type information 
 */
export const ModelA: ModelAFactoryType = ModelAInferred;

const ModelBInferred = t.model({
    /**
     * No Duplication here!
     */
    a: ModelA
});

/**
 * Here we name ModelBInferred inferred type information
 */
interface ModelBFactoryType extends DirectExtendHelper<typeof ModelBInferred> {}

/**
 * We mask ModelBInferred behind it's named type information 
 */
export const ModelB: ModelBFactoryType = ModelBInferred;


// Bonus: export also model instance interfaces, made out of the named interfaces!
export interface ModelAInstance extends Instance<ModelAFactoryType> {}
export interface ModelBInstance extends Instance<ModelBFactoryType> {}