export function generateRandomId(): string {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let word = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    word += letters[randomIndex];
  }

  return word;
}
