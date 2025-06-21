export const getAllStudents = (age) => {
  const students = [
    { id: 1, name: 'Ali Raza', age: 20, grade: 'A', city: 'Lahore' },
    { id: 2, name: 'Sara Khan', age: 22, grade: 'B', city: 'Karachi' },
    { id: 3, name: 'Usman Ali', age: 21, grade: 'A+', city: 'Islamabad' },
    { id: 4, name: 'Ayesha Siddiqui', age: 19, grade: 'A', city: 'Multan' },
    { id: 5, name: 'Hamza Sheikh', age: 23, grade: 'C', city: 'Faisalabad' },
    { id: 6, name: 'Zainab Rizwan', age: 20, grade: 'B+', city: 'Rawalpindi' },
    { id: 7, name: 'Bilal Ahmad', age: 24, grade: 'B', city: 'Peshawar' },
    { id: 8, name: 'Fatima Noor', age: 21, grade: 'A+', city: 'Quetta' },
    { id: 9, name: 'Omar Farooq', age: 22, grade: 'A', city: 'Sialkot' },
    { id: 10, name: 'Mariam Yousuf', age: 20, grade: 'B+', city: 'Hyderabad' }
  ];

  if(typeof age == "number" && age) return students.filter((each) => each.age > age)
  return students;
}