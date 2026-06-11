export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export function jitter(value, amount = 0.05) {
  return value * (1 + (Math.random() - 0.5) * amount);
}

export function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function chance(probability) {
  return Math.random() < probability;
}
