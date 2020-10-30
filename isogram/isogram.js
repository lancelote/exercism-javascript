const isAlphabetic = letter => /[a-zA-Z]/.test(letter);

export const isIsogram = word => {
    let seenLetters = new Set();
    const letters = word.toLowerCase().split("").filter(isAlphabetic);

    for (let letter of letters) {
        if (seenLetters.has(letter)) {
            return false;
        } else {
            seenLetters.add(letter);
        }
    }
    return true;
};
