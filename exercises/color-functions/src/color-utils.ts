type RGB = {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): RGB {
  const hex_chunks = hexColorToChunks(hex);

  return {
    r: parseInt(hex_chunks[0], 16),
    g: parseInt(hex_chunks[1], 16),
    b: parseInt(hex_chunks[2], 16)
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return intToPaddedHex(r) + intToPaddedHex(g) + intToPaddedHex(b);
}

/**
 * Convert an input number to a zero-padded hexadecimal.
 * Also constrains the input to 8-bit range of values.
 */
function intToPaddedHex(n: number): string {
  let constrained_n = Math.max(Math.min(n, 255), 0);
  return constrained_n.toString(16).padStart(2, '0')
}

/**
 * Given a hex rgb string, return it split into an array of 2-digit hex
 * strings. Note that 3-digit hex rgb strings will have each digit doubled,
 * so 3cf becomes 33ccff.
 */
function hexColorToChunks(hex: string): Array<string> {
  let matches;
  if (hex.length === 3) {
    matches = hex.match(/.{1}/g);
  } else if (hex.length === 6) {
    matches = hex.match(/.{2}/g);
  } else {
    throw "Invalid string length for hex argument";
  }

  if (matches === null) throw "Invalid argument";
  if (hex.length === 3) {
    matches = matches.map(x => x + x);
  }
  return matches as Array<string>;
}
