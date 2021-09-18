const BLANK = "  ";
const STAR = "* ";
const EOL = "\n";

export function diamond(n: number): string {
  let diamond = "";

  for (let index = 0; index < n; index++) {
    diamond += printLine(index, n);
  }

  return diamond;
}

export function printLine(index: number, diamondSize: number): string {
  const numberOfStars = 2 * equivalentTopHalfIndex(index, diamondSize) + 1;
  const numberOfBlanks = (diamondSize - numberOfStars) / 2;
  const blanks = BLANK.repeat(numberOfBlanks);
  const stars = STAR.repeat(numberOfStars);
  return blanks + stars + blanks + EOL;
}

export function equivalentTopHalfIndex(index: number, diamondSize: number): number {
  if (index > diamondSize / 2) {
    index = diamondSize - 1 - index;
  }
  return index;
}
