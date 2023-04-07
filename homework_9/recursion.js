let obj = {
  a: 'f',
  b: 78,
  c: 'R',
  d: {
    a: {
      a: null,
      b: 'E',
      c: {
        a: true,
        b: 'C',
        c: 'test',
      },
      d: 'U',
    },
    b: {
      a: 'R',
      b: ['S', 4, 6, 'I'],
      c: 0,
    },
    c: ['O'],
    d: null,
    e: 'N',
  },
};

function getUpperCaseWord(source) {
  let result = '';

  Object.values(source).forEach((value) => {
    if (typeof value === 'string' && value === value.toUpperCase()) {
      result += value;
    }
    
    if (typeof value === 'object' && value !== null) {
      result += getUpperCaseWord(value);
    }
  });

  return result;
}

console.log(getUpperCaseWord(obj));
