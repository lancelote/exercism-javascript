const encodeRegex = /(.)\1*/g;
const decodeRegex = /(\d+)?([a-zA-Z ])/g;

export const encode = (message) => {
  let result = [];

  for (let [group, char] of message.matchAll(encodeRegex)) {
    if (group.length > 1) {
      result.push(group.length.toString());
    }
    result.push(char)
  }

  return result.join("");
};

export const decode = (message) => {
  let result = [];

  for (let [, i, char] of message.matchAll(decodeRegex)) {
    if (i) {
      result.push(char.repeat(parseInt(i)));
    } else {
      result.push(char);
    }
  }

  return result.join("");
};
