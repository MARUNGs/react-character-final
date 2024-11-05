import { atom, selector } from "recoil";

export interface IObject {
  title: string;
  flag: boolean;
}

const headerState = atom<IObject[]>({
  key: "headerState",
  default: [
    { title: "POPULAR", flag: true },
    { title: "COMING", flag: false },
    { title: "NOW PLAYING", flag: false },
  ],
});

export const headerSelector = selector<IObject[]>({
  key: "headerSelector",
  get: ({ get }) => get(headerState),
  set: ({ set }, object) => set(headerState, object),
});
