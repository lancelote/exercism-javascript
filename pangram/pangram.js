const ENGLISH_ALPHABET_LENGTH = 26;

export const isPangram = sentence => {
  const uniqueLetters = new Set(
    sentence.toLowerCase().match(/[a-z]/g)
  );
  return uniqueLetters.size === ENGLISH_ALPHABET_LENGTH;
};
