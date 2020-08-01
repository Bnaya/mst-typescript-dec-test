import { Instance, _NotCustomized, IType, ISimpleType } from "mobx-state-tree";
import { ExtractProps, IAnyModelType, ExtractOthers, ExtractCSTWithoutSTN, IModelType } from "mobx-state-tree/dist/internal";
declare type DirectExtendHelper<T> = T;
declare const ModelAInferred: IModelType<{
    foo: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelAFactoryInterface extends DirectExtendHelper<typeof ModelAInferred> {
}
export declare const ModelA: ModelAFactoryInterface;
declare const ModelBInferred: IModelType<{
    bar: ISimpleType<number>;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelBFactoryInterface extends DirectExtendHelper<typeof ModelBInferred> {
}
export declare const ModelB: ModelBFactoryInterface;
export declare const _ModelC: IModelType<{
    a: ModelAFactoryInterface;
}, {}, _NotCustomized, _NotCustomized>;
interface ModelCFactoryInterface extends DirectExtendHelper<typeof _ModelC> {
}
export declare const ModelC: ModelCFactoryInterface;
export declare const ModelE: LazyComposeModelsTypes<ModelAFactoryInterface, ModelBFactoryInterface, ModelCFactoryInterface>;
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
    foo: ISimpleType<string>;
}>> | import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
    bar: ISimpleType<number>;
}>> | import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
    a: ModelAFactoryInterface;
}>>, import("mobx-state-tree").ModelSnapshotType<{
    foo: ISimpleType<string>;
}> | import("mobx-state-tree").ModelSnapshotType<{
    bar: ISimpleType<number>;
}> | import("mobx-state-tree").ModelSnapshotType<{
    a: ModelAFactoryInterface;
}>, import("mobx-state-tree").ModelInstanceType<{
    foo: ISimpleType<string>;
}, {}> | import("mobx-state-tree").ModelInstanceType<{
    bar: ISimpleType<number>;
}, {}> | import("mobx-state-tree").ModelInstanceType<{
    a: ModelAFactoryInterface;
}, {}>>;
export declare const lazyComposedVar: Instance<typeof ModelE>;
declare type LazyInferenceModelType<T extends IAnyModelType> = IType<ExtractProps<T>, ExtractOthers<T>, ExtractCSTWithoutSTN<T>>;
declare type LazyComposeModelsTypes<T1 extends IAnyModelType, T2 extends IAnyModelType, T3 extends IAnyModelType> = IModelType<ExtractProps<T1> & ExtractProps<T2> & ExtractProps<T3>, ExtractOthers<T1> & ExtractOthers<T2> & ExtractOthers<T3>, ExtractCSTWithoutSTN<T1> & ExtractCSTWithoutSTN<T2> & ExtractCSTWithoutSTN<T3>>;
export {};
