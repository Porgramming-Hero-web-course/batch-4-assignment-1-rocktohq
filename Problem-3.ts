const countWordOccurrences = (sentence: string, word: string): number => {
  const words = sentence.toLowerCase().split(" ");
  // return words.filter((w) => w.includes(word.toLowerCase())).length;
  return words.filter((w) => w === word.toLowerCase()).length;
};
