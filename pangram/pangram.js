const isAlphabetic = letter => /[a-zA-Z]/.test(letter);

export const isPangram = sentence => {
  const uniqueLetters = new Set(
    sentence.toLowerCase().split("").filter(isAlphabetic)
  );
  return uniqueLetters.size === 26;
};
