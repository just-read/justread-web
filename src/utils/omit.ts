const omit = (object: { [name: string]: any }, fields: string[]) => {
  const shallowCopy = {
    ...object
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
};

export default omit;
