import { useRecoilValue } from "recoil";
import { ETitle, IPopular } from "../types/interface";
import { headerSelector } from "../store/atoms";
import { getComingSoon, getNowPlaying, getPopular } from "../api/data";
import { useQuery } from "@tanstack/react-query";

// 타이틀별 호출하는 쿼리문이 다를 것.
function useQueryTitle(title: string) {
  return title === ETitle.POPULAR
    ? getPopular
    : title === ETitle.COMINGSOON
    ? getComingSoon
    : getNowPlaying;
}

export function useCustomQuery() {
  const title = useRecoilValue(headerSelector);
  return useQuery<IPopular[]>({
    queryKey: ["characterList", title],
    queryFn: useQueryTitle(title),
  });
}
