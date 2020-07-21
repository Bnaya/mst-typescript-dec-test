# mobx-state-tree typescript slowness & duplications in `d.ts` emit (And how to make it better) [part 1]

> This article contains work, knowledge and experience accumulated by others and myself regrading improving the performance of typescript build, edit and IDE responsiveness.  
You can find almost all this information scattered in github issues, comments and code snippets.  
I will try to provide references, citations and bibliography. Please help me with that :)

`mobx-state-tree` is an interesting creation that takes types to a new level and typescript inference power to it's limits.  
On this series of articles, we will learn about some caveats and how to overcome them.



## The problem(s)
Emitting typescript types for naive `MST` code that uses any form of compositing,
will lead to duplication/inline of the entire tree of model types for each reference.

Example:
```ts
export const Store1 = t
    .model('Store1', {
        store2: t.optional(t.array(Store2), [])
    });
```
<sub>based on https://github.com/garygentry/mst-decl-test/blob/master/src/stores/store1.ts</sub>

Will emit:

```ts
export declare const Store1: import("mobx-state-tree").IModelType<{
    store2: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        store3: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            store4: import("mobx-state-tree").IModelType<{
                store5: import("mobx-state-tree").IModelType<{
                    prop1: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
            store5: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                prop1: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>, [undefined]>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
```
What we can see here is that instead of referencing types of the child models, we get full duplication/inlining of child models declarations.
That happens for each level inside the stores tree will have the same duplication up to it's level.


## ...But it's not only types emit!

You can think of types emit as visualization of the inferred data structures inside typescript language server. duplication in `d.ts` = more work `tsc/tsserver` need to do or regular basis.  
And indeed when working with big and nested models, the build time and IDE responsiveness of typescript types is badly degraded

## Peeling the onion 🧅

On the coming articles, we will cover issues with `MST` and workarounds for them, one by one, like peeling a fire roasted onion to get to the tasty parts!

## Layer one: reduce import() references
When examining the emitted types for `Store1` above, the first thing that catches my eye is the many references to `import("mobx-state-tree")` for the same symbol. 
`import("mobx-state-tree").IModelType` appears 5 times!

What can we do about it? Lets import the types directly!  
Adding `import type * as MST from "mobx-state-tree";` to our model file will turn the emitted types into:
```ts
import type * as MST from "mobx-state-tree";
export declare const Store1: MST.IModelType<{
    store2: MST.IOptionalIType<MST.IArrayType<MST.IModelType<{
        store3: MST.IArrayType<MST.IModelType<{
            store4: MST.IModelType<{
                store5: MST.IModelType<{
                    prop1: MST.IMaybe<MST.ISimpleType<string>>;
                }, {}, MST._NotCustomized, MST._NotCustomized>;
            }, {}, MST._NotCustomized, MST._NotCustomized>;
            store5: MST.IOptionalIType<MST.IModelType<{
                prop1: MST.IMaybe<MST.ISimpleType<string>>;
            }, {}, MST._NotCustomized, MST._NotCustomized>, [undefined]>;
        }, {}, MST._NotCustomized, MST._NotCustomized>>;
    }, {}, MST._NotCustomized, MST._NotCustomized>>, [undefined]>;
}, {}, MST._NotCustomized, MST._NotCustomized>;

```

Much more compact and readable!

## Coming up next in part 2:

On part 2 we will discover how we can eliminate the nested child stores declaration duplication

### Some references & background:
- [Typescript declaration size #1425](https://github.com/mobxjs/mobx-state-tree/issues/1425)
- [3.x tsc compile performance with declarations & deeply nested stores with arrays
(#973)](https://github.com/mobxjs/mobx-state-tree/issues/973)