const breakpoints = [640, 768, 1024, 1280, 1536];

const containerMargin = [18, 20, 24, 30, 60];

const generateContainerSize = (arr) => {
  return arr.map((i, id) => i - containerMargin[id]);
};

export const gridSystem = {
  breakpoints,
  containerWidths: generateContainerSize(breakpoints),
  gutterWidth: 30,
  gridColumns: 12,
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl',
};
