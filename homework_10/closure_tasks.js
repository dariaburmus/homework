const createStack = () => {
  const stack = [];

  return {
    push: (el) => {
      stack.push(el);
    },
    pop: () => stack.pop(),
    getStack: () => stack,
  };
};

const isBetween = (min, max) => {
  return (el) => {
    if (min > max) {
      console.error('Max cannot be greater than min');

      return false;
    }

    return el >= min && el <= max;
  };
};

const calculate = (operation) => {
  return (a) => {
    return (b) => {
      if (isNaN(a) || isNaN(b)) {
        console.error('Invalid operands');

        return 0;
      }

      switch (operation) {
        case 'sum':
          return a + b;

        case 'subtraction':
          return a - b;

        case 'multiplication':
          return a * b;

        case 'division':
          return a / b;

        case 'pow':
          return a ** b;
      }
    };
  };
};

const sortByField = (fieldName, sortType) => {
  return (a, b) => {
    const fieldA = a[fieldName];
    const fieldB = b[fieldName];
    const sortCondition = sortType === 'asc' ? fieldA > fieldB : fieldB > fieldA;

    return sortCondition ? 1 : -1;
  };
};