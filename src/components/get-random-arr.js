export default function getRandomArr() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const mySet = new Set();

  while (mySet.size < 12) {
    mySet.add(getRandomIntInclusive(1, 800))
  }

  return Array.from(mySet)
}
