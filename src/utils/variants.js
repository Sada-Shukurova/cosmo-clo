export const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      type: "spring",
      stiffness: 70,
    },
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};

export const textVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6,
      type: "spring",
      stiffness: 90,
    },
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};
