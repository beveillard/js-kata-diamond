export function diamond(n) {
  let diamond = "";

  for (let lineSize = 1; lineSize <= n; lineSize += 2)     diamond += printLine(lineSize, n);
  for (let lineSize = n - 2; lineSize > 0; lineSize -= 2)  diamond += printLine(lineSize, n);

  console.log(diamond);

  return diamond;
}

export function printLine(lineSize, diamondSize) {
  let blanks = printChars(' ', (diamondSize - lineSize) / 2);
  let stars = printChars('*', lineSize);
  return blanks + stars + blanks + "\n";
}

export function printChars(char, length) {
  let string = "";

  for (let i = 0; i < length; i++) {
    string += char + " ";
  }

  return string;
}