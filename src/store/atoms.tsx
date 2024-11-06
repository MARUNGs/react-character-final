import { atom, selector } from "recoil";
import { IPopular } from "../types/interface";

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

const popularState = atom<IPopular[]>({
  key: "popularState",
  default: [],
});

export const popularSelector = selector<IPopular[]>({
  key: "popularSelector",
  get: ({ get }) => get(popularState),
  set: ({ set }, arr) => set(popularState, arr as IPopular[]),
});

const comingSoonState = atom<IPopular[]>({
  key: " comingSoon",
  default: [],
});

export const comingSoonSelector = selector<IPopular[]>({
  key: "comingSoonSelector",
  get: ({ get }) => get(comingSoonState),
  set: ({ set }, arr) => set(comingSoonState, arr as IPopular[]),
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});
