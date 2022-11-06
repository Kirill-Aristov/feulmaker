export default function maxFromTheOrigin(arrayIdRows, indexEveryoneHeader) {
  let closestRight = Math.min(...arrayIdRows.filter(i => i > indexEveryoneHeader));//ближайшее наибольшее число
  if (closestRight === Infinity) {
    return 0;
  }
  return closestRight - 1;
}