import { useRecoilValue } from "recoil";
import { ETitle, IPopular } from "../types/interface";
import { headerSelector } from "../store/atoms";
import { getComingSoon, getNowPlaying, getPopular } from "../api/data";
import { useQuery } from "@tanstack/react-query";

// 타이틀별 호출하는 쿼리문이 다를 것.
function useQueryTitle(title: string) {
  switch (title) {
    case ETitle.POPULAR:
      return () => getPopular();
    case ETitle.COMINGSOON:
      return () => getComingSoon();
    case ETitle.NOWPLAYING:
      return () => getNowPlaying();
    default:
      return () => getPopular(); // 기본값 설정
  }
}

export function useCustomQuery() {
  const title = useRecoilValue(headerSelector);
  return useQuery<IPopular[]>({
    queryKey: ["movies", title],
    queryFn: useQueryTitle(title),
  });
}
