import { atom, selector } from "recoil";

const headerState = atom<string>({
  key: "headerState",
  default: "",
});

export const headerSelector = selector<string>({
  key: "headerSelector",
  get: ({ get }) => get(headerState),
  set: ({ set }, title) => set(headerState, title),
});

export const idState = atom<number>({
  key: "idState",
  default: 0,
});

export const idSelector = selector<number>({
  key: "idSelector",
  get: ({ get }) => get(idState),
  set: ({ set }, value) => set(idState, value),
});
