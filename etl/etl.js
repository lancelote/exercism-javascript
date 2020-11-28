export const transform = (scoreToLetters) => {
  let letterToScore = {};
  for (const [score, letters] of Object.entries(scoreToLetters)) {
    for (const letter of letters) {
      letterToScore[letter.toLowerCase()] = Number(score);
    }
  }
  return letterToScore;
};
