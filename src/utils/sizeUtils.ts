export function getRandomWaveHeight() {
  const minHeight = 6;
  const maxHeight = 12;
  return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
}
