const getWords = sentence => {
  return sentence.toLowerCase().match(/\w+('\w+)?/g);
}

export const countWords = sentence => {
  const counter = {};

  for (const word of getWords(sentence)) {
    if (Object.prototype.hasOwnProperty.call(counter, word)) {
      counter[word] += 1;
    } else {
      counter[word] = 1;
    }
  }

  return counter;
};
