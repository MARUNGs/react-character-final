export const containerVars = {
  init: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const cardVars = {
  init: {
    scale: 0,
  },
  doing: {
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
