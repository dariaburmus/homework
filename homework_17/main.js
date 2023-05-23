const calcMedian = (marks) => {
  const sorted = [...marks].sort((a, b) => a - b);

  return sorted[Math.floor(sorted.length / 2)];
};

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  welcome() {
    return `Hi! I'm ${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, marks, faculty) {
    super(name, surname);

    this.marks = marks;
    this.faculty = faculty;
  }

  getAvgMark() {
    return this.getTotal(this.marks) / this.marks.length;
  }

  getMedianMark() {
    return calcMedian(this.marks);
  }

  getMaxMark() {
    return Math.max(...this.marks);
  }

  getMinMark() {
    return Math.min(...this.marks);
  }

  getTotal() {
    return this.marks.reduce((acc, mark) => acc + mark, 0);
  }

  getInfo() {
    return `name: ${this.name}
faculty: ${this.faculty}
total marks: ${this.getTotal()}
`;
  }
}

class Headman extends Student {
  constructor(...params) {
    super(...params);
  }

  defendGroup() {
    return 'This is my group. I am their hero!';
  }
}

const person = new Person('John', 'Doe');
console.log(person.welcome());

const student = new Student('Jane', 'Smith', [100, 20, 30, 40], 'front-end');
console.log(student.welcome());
console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());

const headman = new Headman('Bruce', 'Smith', [11, 33, 95, 78, 90], 'manager');
console.log(headman.welcome());
console.log(headman.defendGroup());
console.log(headman.getAvgMark());
console.log(headman.getMedianMark());
console.log(headman.getMaxMark());
console.log(headman.getMinMark());
console.log(headman.getTotal());
console.log(headman.getInfo());