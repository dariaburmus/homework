const calcAverage = (marks) => {
  let sum = 0;

  marks.forEach((mark) => {
    sum += mark;
  });

  return sum / marks.length;
};

const calcMedian = (marks) => {
  const sorted = [...marks].sort();

  return sorted[Math.round(sorted.length / 2)];
};

function Student(name, faculty, marks) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;

  this.getAvgMark = function () {
    return calcAverage(this.marks);
  };

  this.getMedianMark = function () {
    return calcMedian(this.marks);
  };

  this.getMaxMark = function () {
    return Math.max(...this.marks);
  };

  this.getMinMark = function () {
    return Math.min(...this.marks);
  };

  this.getTotal = function () {
    return this.marks.reduce((acc, mark) => acc + mark, 0);
  };

  this.getInfo = function () {
    return `name: ${this.name}
faculty: ${this.faculty}
total marks: ${this.getTotal()}
`;
  };
}

const student = new Student('Andrew', 'engineer', [95, 20, 15, 60, 65, 78, 90]);

console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());