function MinWindowSubstring(strArr) {
  let output = "";
  const targetString = strArr[1];
  let windowSize = targetString.length;
  const mainString = strArr[0];
  const targetCounter = countLetters(targetString);
  while (windowSize < mainString.length && output === "") {
    for (let i = 0; i <= mainString.length - windowSize; i++) {
      let current = mainString.substring(i, i + windowSize);
      if (findCoincidence(current, { ...targetCounter })) {
        output = current;
        break;
      }
    }
    windowSize++;
  }
  return output;
}

function validateIfFound(targetCounter) {
  return Object.values(targetCounter).reduce((acc, val) => (acc += val));
}

function countLetters(string) {
  let counter = {};
  for (let char of string) {
    counter[char] = (counter[char] || 0) + 1;
  }
  return counter;
}

function findCoincidence(window, targetCounter) {
  for (let char of window) {
    if (targetCounter[char]) targetCounter[char]--;
    if (validateIfFound(targetCounter) === 0) {
      return true;
    }
  }
  return false;
}
