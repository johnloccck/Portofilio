export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};
export const containerWork = {
  hidden: { opacity: 0 },
  show: {
    background: "#FFFFFF",
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "easeOut",

      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export const titleAnim = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: { type: "tween", ease: "circOut", duration: 0.75 },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "circOut", duration: 1 },
  },
};
export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 1,
      delay: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const workPhoto = {
  hidden: { scale: 1.5 },
  show: {
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const reveal = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
    },
  },
};
