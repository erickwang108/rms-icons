let idSeed = 0;

const genId = () => {
  idSeed += 1;
  return `_icon_id_${idSeed}`;
};

export default genId;
