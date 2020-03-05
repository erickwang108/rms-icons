let idSeed = 0;

export const genId = (prefix = '_icon_id_') => {
  idSeed += 1;
  return `${prefix}${idSeed}`;
};

