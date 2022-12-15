const capitaliseFirstLetter = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length);

// Fisher-Yates algorithm for shuffling arrays
const shuffle = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// Simple shuffle
/* const shuffle = (arr) => {
  const array = [...arr].sort((a, b) => 0.5 - Math.random());
  return array;
}; */

export { capitaliseFirstLetter, shuffle };
