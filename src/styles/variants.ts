// 문제가 되었떤 부분...
// 부모의 variants를 상속받는 자식의 variants prop는 부모와 반드시 동일해야 한다.
// whileHover같이 기타 motion이 필요하면 다른 방법으로 CSS를 부여할 것.
export const containerVars = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // 자식 요소들이 0.1초 간격으로 순서대로 나타남
    },
  },
};

export const itemVars = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

export const imgVars = {
  hover: {
    y: -50,
    transition: {
      duration: 0.05,
      type: "tween",
    },
  },
};
