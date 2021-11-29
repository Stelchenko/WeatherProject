export function generateCoords() {
  const lat = generateNumbers(-90, 90);
  const lon = generateNumbers(-180, 180);

  return {lat, lon}
}

function generateNumbers(min: number, max: number) {
  return Math.random() * (max - min) + min;
}