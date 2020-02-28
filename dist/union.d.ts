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
export declare const ModelD: LazyInferenceModelType<ModelAFactoryInterface> | LazyInferenceModelType<ModelBFactoryInterface> | LazyInferenceModelType<ModelCFactoryInterface>;
export declare const ModelDvariadicUnion: LazyInferenceModelType<ModelAFactoryInterface | ModelBFactoryInterface | ModelCFactoryInterface>;
declare type LazyInferenceModelType<T extends IAnyModelType> = IType<ExtractProps<T>, ExtractOthers<T>, ExtractCSTWithoutSTN<T>>;
export {};
