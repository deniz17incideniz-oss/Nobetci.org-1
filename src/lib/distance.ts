export function distanceInKm(
  from: [number, number],
  to: [number, number],
) {
  const radius = 6371;
  const toRadians = (degree: number) => (degree * Math.PI) / 180;
  const latitude = toRadians(to[0] - from[0]);
  const longitude = toRadians(to[1] - from[1]);
  const a =
    Math.sin(latitude / 2) ** 2 +
    Math.cos(toRadians(from[0])) *
      Math.cos(toRadians(to[0])) *
      Math.sin(longitude / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
