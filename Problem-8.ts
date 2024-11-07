const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
  return keys.every((key) => obj[key]);
};
