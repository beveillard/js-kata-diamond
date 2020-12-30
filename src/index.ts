const blank = "  ";
const star = "* ";

export function diamond(n: number): string {
  let diamond = "";

  for (let index = 0; index < n; index++) {
    diamond += printLine(index, n);
  }

  console.log(diamond);

  return diamond;
}

export function printLine(index: number, diamondSize: number): string {
  const numberOfStars = 2 * equivalentTopHalfIndex(index, diamondSize) + 1;
  const numberOfBlanks = (diamondSize - numberOfStars) / 2;
  const blanks = printChars(blank, numberOfBlanks);
  const stars = printChars(star, numberOfStars);
  return blanks + stars + blanks + "\n";
}

export function printChars(char: string, length: number): string {
  let string = "";

  for (let i = 0; i < length; i++) {
    string += char;
  }

  return string;
}

export function equivalentTopHalfIndex(index: number, diamondSize: number): number {
  if (index > diamondSize / 2) {
    index = diamondSize - 1 - index;
  }
  return index;
}
