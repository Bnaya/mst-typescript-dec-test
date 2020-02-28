import { _NotCustomized, IType } from "mobx-state-tree";
import { ExtractProps, IAnyModelType, ExtractOthers, ExtractCSTWithoutSTN } from "mobx-state-tree/dist/internal";
declare type ForDirectExtend<T> = T;
declare const _ModelA: import("mobx-state-tree").IModelType<{
    foo: import("mobx-state-tree").ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelAFactoryInterface extends ForDirectExtend<typeof _ModelA> {
}
export declare const ModelA: ModelAFactoryInterface;
declare const _ModelB: import("mobx-state-tree").IModelType<{
    bar: import("mobx-state-tree").ISimpleType<number>;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelBFactoryInterface extends ForDirectExtend<typeof _ModelB> {
}
export declare const ModelB: ModelBFactoryInterface;
export declare const _ModelC: import("mobx-state-tree").IModelType<{
    a: ModelAFactoryInterface;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelCFactoryInterface extends ForDirectExtend<typeof _ModelC> {
}
export declare const ModelC: ModelCFactoryInterface;
/**
 * Compare this d.ts
 */
export declare const ModelD: LazyInferenceModelType<ModelAFactoryInterface> | LazyInferenceModelType<ModelBFactoryInterface> | LazyInferenceModelType<ModelCFactoryInterface>;
/**
 * Compare this d.ts
 */
export declare const ModelDvariadicUnion: LazyInferenceModelType<ModelAFactoryInterface | ModelBFactoryInterface | ModelCFactoryInterface>;
/**
 * Compare this d.ts
 */
export declare const ModelDNotLazy: import("mobx-state-tree").ITypeUnion<import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
    foo: import("mobx-state-tree").ISimpleType<string>;
}>> | import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
    bar: import("mobx-state-tree").ISimpleType<number>;
}>> | import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
    a: ModelAFactoryInterface;
}>>, import("mobx-state-tree").ModelSnapshotType<{
    foo: import("mobx-state-tree").ISimpleType<string>;
}> | import("mobx-state-tree").ModelSnapshotType<{
    bar: import("mobx-state-tree").ISimpleType<number>;
}> | import("mobx-state-tree").ModelSnapshotType<{
    a: ModelAFactoryInterface;
}>, import("mobx-state-tree").ModelInstanceType<{
    foo: import("mobx-state-tree").ISimpleType<string>;
}, {}> | import("mobx-state-tree").ModelInstanceType<{
    bar: import("mobx-state-tree").ISimpleType<number>;
}, {}> | import("mobx-state-tree").ModelInstanceType<{
    a: ModelAFactoryInterface;
}, {}>>;
declare type LazyInferenceModelType<T extends IAnyModelType> = IType<ExtractProps<T>, ExtractOthers<T>, ExtractCSTWithoutSTN<T>>;
export {};
