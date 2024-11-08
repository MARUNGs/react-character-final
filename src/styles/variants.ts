export const containerVars = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 자식 요소들이 0.1초 간격으로 순서대로 나타남
      delayChildren: 0.2, // 첫 번째 요소가 나타나기 전의 지연 시간
    },
  },
};

export const cardVars = {
  init: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  hover: {
    y: -50,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};
