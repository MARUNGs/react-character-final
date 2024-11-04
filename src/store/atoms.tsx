import { atom, selector } from "recoil";

export const titleState = atom<string[]>({
  key: "titleState",
  default: ["POPULAR", "COMING", "NOW PLAYING"],
});

export const titleFlagState = atom<boolean[]>({
  key: "titleFlagState",
  default: [false, false, false],
});

export const titleSelector = selector<string[]>({
  key: "titleSelector",
  get: ({ get }) => get(titleState),
});

export const titleFlagSelector = selector<boolean[]>({
  key: "titleFlagSelector",
  get: ({ get }) => get(titleFlagState),
  set: ({ set }, object) => set(titleFlagState, object),
});
