import { types } from "mobx-state-tree";

/**
 * Importing none-directly referenced types drastically reduce emitted d.ts size
 * For example, without it, every reference to `ISimpleType` would be:
 * ```
 *  import("mobx-state-tree/dist/internal").ISimpleType
 * ```
 *  And thus for every other symbol
 */
import type {
  ISimpleType,
  ModelSnapshotType,
  ModelInstanceType,
  _NotCustomized,
  ModelCreationType,
  ITypeUnion,
  IArrayType,
  IModelType,
} from "mobx-state-tree";

const Sugar = types.model("Sugar", {
  level: types.number,
  source: types.string,
});

const Spice = types.model("Spice", {
  origin: types.string,
  intensity: types.refinement("Intensity", types.number, (n) => n > 0 && n <= 100),
});

const EverythingNice = types.model("EverythingNice", {
  awesomeness: types.array(types.number),
});

const ChemicalX = types.model("ChemicalX", {
  origin: types.string,
});

const IngredientsUnion = types.union(Sugar, Spice, EverythingNice, ChemicalX);

export const BasePowerpuff = types.model("BasePowerpuff", {
  /**
   * This is going to appear in the d.ts file for each model that extends or reference BasePowerpuff
   * Even though, it defined only once
   * The duplication is nested & recursive
   */
  ingredients: types.array(IngredientsUnion),
  color: types.string,
});

export const Bubbles = types.compose(
  "Bubbles",
  BasePowerpuff,
  types.model({
    bubblesSpecialProp: types.Date,
  })
);

export const Buttercup = types.compose(
  "Buttercup",
  BasePowerpuff,
  types.model({
    buttercupSpecialProp: types.boolean,
  })
);

export const Blossom = types.compose(
  "Blossom",
  BasePowerpuff,
  types.model({
    blossomSpecialProp: types.number,
  })
);

export const MojoJojo = types.compose(
  "MojoJojo",
  BasePowerpuff,
  types.model({
    mojoJojoSpecialProp: types.string,
  })
);
