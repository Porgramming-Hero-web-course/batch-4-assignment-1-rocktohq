const removeDuplicates = (numbers: number[]): number[] => {
  const unqNumbers: number[] = [];
  for (const number of numbers) {
    if (!unqNumbers.includes(number)) {
      unqNumbers.push(number);
    }
  }

  return unqNumbers;
};
