const test = [
  {
    name: 'Dallas Prosacco',
    specialty: 'Chief Identity Officer',
    marks: [
      96, 44, 78, 90, 67, 34, 65, 61, 64, 45, 48, 76, 37, 71, 71, 33, 36, 57,
      31, 66, 20, 66, 44, 86, 55
    ]
  },
  {
    name: 'Domingo Morissette',
    specialty: 'National Identity Engineer',
    marks: [
      79, 100, 83, 73, 55, 49, 71, 58, 21, 77, 57, 100, 94, 73, 81, 44, 68, 60,
      85, 98, 80, 93, 84, 48, 51
    ]
  },
  {
    name: 'Greg Lockman',
    specialty: 'Corporate Integration Director',
    marks: [
      26, 87, 87, 24, 73, 27, 30, 45, 66, 37, 89, 56, 25, 38, 29, 20, 56, 93,
      94, 49, 28, 44, 97, 88, 89
    ]
  },
  {
    name: 'Mr. Edmund Veum',
    specialty: 'Investor Solutions Designer',
    marks: [
      64, 38, 94, 74, 85, 39, 98, 37, 29, 97, 42, 44, 33, 29, 88, 43, 55, 68,
      47, 38, 93, 47, 92, 70, 64
    ]
  },
  {
    name: 'Victor DuBuque',
    specialty: 'Central Functionality Developer',
    marks: [
      49, 46, 21, 44, 40, 46, 44, 90, 98, 84, 21, 63, 71, 47, 38, 43, 38, 21,
      99, 68, 97, 95, 45, 86, 83
    ]
  },
  {
    name: 'Dr. Arturo Rutherford',
    specialty: 'Investor Intranet Agent',
    marks: [
      99, 75, 99, 33, 90, 96, 73, 56, 61, 43, 94, 85, 59, 64, 70, 93, 41, 31,
      65, 97, 63, 74, 97, 94, 43
    ]
  },
  {
    name: 'Carolyn Lockman',
    specialty: 'Direct Program Coordinator',
    marks: [
      92, 40, 69, 93, 20, 21, 31, 68, 75, 24, 82, 26, 48, 31, 45, 49, 39, 85,
      67, 54, 49, 23, 35, 72, 41
    ]
  },
  {
    name: 'Edward Emard',
    specialty: 'Lead Group Producer',
    marks: [
      20, 80, 32, 84, 69, 34, 52, 26, 33, 54, 51, 76, 60, 27, 100, 87, 60, 21,
      31, 92, 96, 33, 52, 69, 22
    ]
  },
  {
    name: 'Janie Koepp',
    specialty: 'Senior Communications Specialist',
    marks: [
      89, 81, 37, 56, 40, 58, 32, 58, 46, 42, 77, 98, 49, 45, 30, 26, 51, 23,
      43, 81, 56, 96, 26, 42, 75
    ]
  },
  {
    name: 'Pavlo Cruise',
    specialty: 'Product Owner',
    marks: [
      12, 33, 11, 55, 1, 65, 11, 70, 32, 45, 48, 7, 3, 50, 66, 33, 36, 57, 31,
      66, 20, 66, 44, 36, 55
    ]
  },
  {
    name: 'Agnes Stoltenberg',
    specialty: 'International Division Designer',
    marks: [
      60, 39, 35, 79, 45, 68, 65, 81, 28, 46, 38, 93, 23, 50, 30, 82, 71, 39,
      55, 57, 88, 49, 43, 26, 31
    ]
  },
  {
    name: 'Timmy Murazik',
    specialty: 'Senior Interactions Liaison',
    marks: [
      68, 52, 84, 78, 87, 47, 30, 84, 39, 93, 84, 96, 34, 79, 97, 46, 31, 49,
      31, 62, 79, 65, 20, 78, 51
    ]
  },
  {
    name: 'Annie Klocko',
    specialty: 'Legacy Data Representative',
    marks: [
      38, 27, 22, 22, 98, 24, 67, 69, 98, 29, 67, 65, 81, 99, 48, 38, 52, 97,
      23, 57, 50, 81, 38, 99, 48
    ]
  },
  {
    name: 'Sally Schuster',
    specialty: 'Dynamic Division Designer',
    marks: [
      62, 44, 74, 71, 67, 42, 85, 37, 20, 73, 65, 22, 87, 79, 56, 89, 93, 90,
      49, 51, 33, 64, 84, 85, 46
    ]
  },
  {
    name: 'Gerald Jaskolski PhD',
    specialty: 'Principal Markets Manager',
    marks: [
      89, 45, 39, 50, 83, 67, 88, 67, 68, 31, 29, 64, 80, 55, 57, 77, 23, 47,
      58, 21, 61, 37, 75, 90, 64
    ]
  },
  {
    name: 'Clifford Thompson',
    specialty: 'Direct Brand Representative',
    marks: [
      32, 51, 31, 83, 46, 68, 26, 67, 44, 30, 78, 84, 25, 64, 65, 62, 100, 96,
      75, 38, 95, 83, 26, 45, 72
    ]
  },
  {
    name: 'Janet Schamberger',
    specialty: 'Human Quality Facilitator',
    marks: [
      35, 62, 59, 45, 53, 52, 20, 59, 86, 28, 99, 81, 21, 97, 77, 74, 72, 71,
      75, 47, 65, 31, 59, 87, 54
    ]
  },
  {
    name: 'Jessie Murazik',
    specialty: 'Lead Program Assistant',
    marks: [
      100, 88, 97, 28, 98, 75, 55, 60, 90, 60, 33, 30, 99, 89, 59, 73, 20, 28,
      25, 95, 68, 84, 52, 84, 57
    ]
  },
  {
    name: 'Conrad Schuster V',
    specialty: 'International Markets Director',
    marks: [
      51, 37, 98, 51, 95, 94, 98, 69, 44, 58, 54, 66, 72, 20, 71, 32, 84, 32,
      49, 69, 57, 76, 85, 72, 61
    ]
  },
  {
    name: 'Delia McClure',
    specialty: 'Principal Operations Agent',
    marks: [
      98, 20, 91, 98, 68, 24, 84, 52, 29, 25, 82, 52, 66, 52, 56, 62, 46, 97,
      80, 77, 81, 49, 50, 86, 66
    ]
  },
  {
    name: 'Judith Konopelski',
    specialty: 'Global Infrastructure Strategist',
    marks: [
      97, 80, 37, 76, 69, 62, 61, 86, 43, 76, 68, 45, 93, 100, 49, 56, 81, 38,
      53, 62, 59, 56, 26, 57, 52
    ]
  },
  {
    name: 'Kyle Reichert',
    specialty: 'Dynamic Identity Administrator',
    marks: [
      96, 31, 66, 60, 21, 90, 100, 46, 56, 56, 65, 89, 23, 20, 30, 100, 55, 57,
      45, 93, 59, 79, 53, 89, 33
    ]
  },
  {
    name: 'Vin Diesel',
    specialty: 'Financial Director',
    marks: [
      1, 3, 11, 33, 21, 7, 5, 46, 56, 56, 65, 34, 23, 20, 30, 30, 55, 57, 45,
      10, 59, 8, 53, 40, 33
    ]
  },
  {
    name: 'Milton Batz V',
    specialty: 'International Program Technician',
    marks: [
      60, 35, 24, 37, 53, 56, 83, 31, 74, 88, 31, 44, 37, 94, 29, 96, 72, 23,
      41, 27, 53, 63, 92, 54, 55
    ]
  },
  {
    name: 'Lee Krajcik I',
    specialty: 'International Tactics Facilitator',
    marks: [
      90, 91, 37, 48, 69, 94, 33, 41, 59, 73, 77, 24, 39, 29, 48, 57, 57, 34,
      21, 21, 68, 78, 45, 85, 84
    ]
  },
  {
    name: 'Alexandra Sawayn',
    specialty: 'Future Security Representative',
    marks: [
      36, 68, 98, 70, 60, 23, 33, 59, 58, 77, 55, 60, 27, 54, 20, 75, 63, 90,
      61, 74, 72, 88, 85, 33, 76
    ]
  },
  {
    name: 'Javier Huel',
    specialty: 'Product Directives Executive',
    marks: [
      34, 87, 85, 54, 69, 52, 80, 50, 64, 86, 77, 69, 87, 83, 37, 61, 36, 77,
      89, 94, 64, 36, 56, 55
    ]
  }
];

const calcAverage = (marks) => {
  let sum = 0;

  marks.forEach((mark) => {
    sum += mark;
  });

  return sum / marks.length;
};

const calcAverageMarks = (students) => {
  return students.map((student) => {
    return {
      ...student,
      averageGrade: calcAverage(student.marks),
    };
  });
};

const getExpulsionStudents = (students) => {
  const studentsWithAverage = calcAverageMarks(students);

  return studentsWithAverage.filter((student) => student.averageGrade < 50);
};

const calcMedian = (marks) => {
  const sorted = [...marks].sort();

  return sorted[Math.round(sorted.length / 2)];
};

const calcMarksMedian = (students) => {
  return students.map((student) => {
    return {
      ...student,
      median: calcMedian(student.marks),
    };
  });
};

const createNewStudent = (students, newStudent) => {
  return [...students, newStudent];
};

const getSortedByAverage = (students) => {
  const studentsWithAverageMark = calcAverageMarks(students);
  const sorted = [...studentsWithAverageMark].sort((studentA, studentB) => {
    return studentB.averageGrade - studentA.averageGrade;
  });

  return sorted;
};

const getStudentsList = (students) => {
  const sorted = getSortedByAverage(students);

  return sorted.map((student) => `${student.name} - ${student.averageGrade}`);
};

const getTopStudents = (students, qty) => {
  const sorted = getSortedByAverage(students);

  return sorted.slice(0, qty);
};

console.log(calcAverageMarks(test));
console.log(getExpulsionStudents(test));
console.log(calcMarksMedian(test));

const newStudent = {
  name: 'Sandra Bullock',
  specialty: 'Front-End Developer',
  marks: [
    32, 39, 35, 79, 45, 68, 65, 81, 28, 55, 38, 15, 16, 50, 30, 82, 71, 22, 55,
    57, 20, 49, 43, 11, 31,
  ],
};
console.log(createNewStudent(test, newStudent));

console.log(getStudentsList(test));
console.log(getTopStudents(test, 5));
