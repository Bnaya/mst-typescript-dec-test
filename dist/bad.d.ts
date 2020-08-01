import { IModelType, _NotCustomized, ISimpleType } from "mobx-state-tree";
export declare const ModelA: IModelType<{
    foo: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
export declare const ModelB: IModelType<{
    a: IModelType<{
        foo: ISimpleType<string>;
    }, {}, _NotCustomized, _NotCustomized>;
}, {}, _NotCustomized, _NotCustomized>;
