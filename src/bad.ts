import {
    types as t,
    IModelType,
    Instance,
    _NotCustomized,
    ISimpleType
} from "mobx-state-tree";

export const ModelA = t.model({
    foo: t.string
});

export const ModelB = t.model({
    /**
     * Duplication here!
     */
    a: ModelA
});