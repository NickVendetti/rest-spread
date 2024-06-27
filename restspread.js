//Given this function

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// write an ES2015 Version

const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

//findMin
findMin(1, 4, 12, -3);
findMin(1, -1);
findMin(3, 1);
const findMin = (...args) => Math.min(...args);

//mergeObjects

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);
doubleAndReturnArgs([2], 10, 4);

//slice and dice

//remove a random element in the items array and return a new array without that item

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

//return a new array with every item in array1 and array2

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

//return a new object with all the keys and values from obj and a new key/value pair

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

//return a new object with a key removed

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

//combine two objects and return a new object

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//return a new object with a modified key and value

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
