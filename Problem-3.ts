const countWordOccurrences = (sentence: string, word: string): number => {
  const words = sentence.split(" ");
  console.log(words);
  return words.filter((w) => w.toLowerCase().includes(word.toLowerCase()))
    .length;
};
