export default function randomizeArray(arr) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const newArr = [];

  while (arr.length !== 0) {
    const randomIndex = getRandomIntInclusive(0, arr.length - 1);
    newArr.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return newArr;
}
