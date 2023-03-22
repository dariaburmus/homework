const reverse = (source) => {
  const isString = typeof source === 'string';
  let result = isString ? '' : [];

  for (let i = source.length - 1; i >= 0; i--) {
    if (isString) {
      result += source[i];
    } else {
      result[result.length] = source[i];
    }
  }

  return result;
};

const verifyNumbers = (source) => {
  let result = [];

  if (source.length === 0) {
    return result;
  }

  for (let i = 0; i < source.length; i++) {
    if (typeof source[i] === 'number') {
      result[result.length] = source[i];
    }
  }

  return result;
};

const getMin = (source) => {
  let result = source[0];

  for (let i = 1; i < source.length; i++) {
    if (source[i] < result) {
      result = source[i];
    }
  }

  return result;
};

const getAverage = (source) => {
  let sum = 0;

  for (let i = 0; i < source.length; i++) {
    sum += source[i];
  }

  return sum / source.length;
};

const getMaxString = (source) => {
  let result = source[0];

  for (let i = 1; i < source.length; i++) {
    if (source[i].length > result.length) {
      result = source[i];
    }
  }

  return result;
};

const utils = {
  reverse,
  verifyNumbers,
  getMin,
  getAverage,
  getMaxString,
}; 