const blank = "  ";
const star = "* ";

export function diamond(n) {
  let diamond = "";

  for (let index = 0; index < n; index++) {
    diamond += printLine(index, n);
  }

  console.log(diamond);

  return diamond;
}

export function printLine(index, diamondSize) {
  let numberOfStars = 2 * equivalentTopHalfIndex(index, diamondSize) + 1;
  let numberOfBlanks = (diamondSize - numberOfStars) / 2;
  let blanks = printChars(blank, numberOfBlanks);
  let stars = printChars(star, numberOfStars);
  return blanks + stars + blanks + "\n";
}

export function printChars(char, length) {
  let string = "";

  for (let i = 0; i < length; i++) {
    string += char;
  }

  return string;
}

export function equivalentTopHalfIndex(index, diamondSize) {
  if (index > diamondSize / 2) {
    index = diamondSize - 1 - index;
  }
  return index;
}