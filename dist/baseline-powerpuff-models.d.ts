/**
 * Importing none-directly referenced types drastically reduce emitted d.ts size
 *
 */
import type { ISimpleType, ModelSnapshotType, ModelInstanceType, _NotCustomized, ModelCreationType, ITypeUnion, IArrayType, IModelType } from "mobx-state-tree";
export declare const BasePowerpuff: IModelType<{
    /**
     * This is going to appear in the d.ts file for each model that extends or reference BasePowerpuff
     * Even though, it defined only once
     * The duplication is nested & recursive
     */
    ingredients: IArrayType<ITypeUnion<ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
    }>>, ModelSnapshotType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }> | ModelSnapshotType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
    }>, ModelInstanceType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }, {}> | ModelInstanceType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
    }, {}>>>;
    color: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
export declare const Bubbles: IModelType<{
    /**
     * This is going to appear in the d.ts file for each model that extends or reference BasePowerpuff
     * Even though, it defined only once
     * The duplication is nested & recursive
     */
    ingredients: IArrayType<ITypeUnion<ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
    }>>, ModelSnapshotType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }> | ModelSnapshotType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
    }>, ModelInstanceType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }, {}> | ModelInstanceType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
    }, {}>>>;
    color: ISimpleType<string>;
} & {
    bubblesSpecialProp: import("mobx-state-tree").IType<number | Date, number, Date>;
}, {}, _NotCustomized, _NotCustomized>;
export declare const Buttercup: IModelType<{
    /**
     * This is going to appear in the d.ts file for each model that extends or reference BasePowerpuff
     * Even though, it defined only once
     * The duplication is nested & recursive
     */
    ingredients: IArrayType<ITypeUnion<ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
    }>>, ModelSnapshotType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }> | ModelSnapshotType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
    }>, ModelInstanceType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }, {}> | ModelInstanceType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
    }, {}>>>;
    color: ISimpleType<string>;
} & {
    buttercupSpecialProp: ISimpleType<boolean>;
}, {}, _NotCustomized, _NotCustomized>;
export declare const Blossom: IModelType<{
    /**
     * This is going to appear in the d.ts file for each model that extends or reference BasePowerpuff
     * Even though, it defined only once
     * The duplication is nested & recursive
     */
    ingredients: IArrayType<ITypeUnion<ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
    }>>, ModelSnapshotType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }> | ModelSnapshotType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
    }>, ModelInstanceType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }, {}> | ModelInstanceType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
    }, {}>>>;
    color: ISimpleType<string>;
} & {
    blossomSpecialProp: ISimpleType<number>;
}, {}, _NotCustomized, _NotCustomized>;
export declare const MojoJojo: IModelType<{
    /**
     * This is going to appear in the d.ts file for each model that extends or reference BasePowerpuff
     * Even though, it defined only once
     * The duplication is nested & recursive
     */
    ingredients: IArrayType<ITypeUnion<ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }>> | ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
        origin: ISimpleType<string>;
    }>>, ModelSnapshotType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }> | ModelSnapshotType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }> | ModelSnapshotType<{
        origin: ISimpleType<string>;
    }>, ModelInstanceType<{
        level: ISimpleType<number>;
        source: ISimpleType<string>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
        intensity: ISimpleType<number>;
    }, {}> | ModelInstanceType<{
        awesomeness: IArrayType<ISimpleType<number>>;
    }, {}> | ModelInstanceType<{
        origin: ISimpleType<string>;
    }, {}>>>;
    color: ISimpleType<string>;
} & {
    mojoJojoSpecialProp: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
