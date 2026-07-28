/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type studentData = {
    uniqueID : string,
    fullName: string,
    age: number,
    status: boolean
}

const student1: studentData = {
    uniqueID: `0001`,
    fullName: `Prabu Panedya`,
    age: 16,
    status: true
}

const student2: studentData = {
    uniqueID: `0010`,
    fullName: `Fatih Lintang Adzhabi`,
    age: 17,
    status: false
}
const student3: studentData = {
    uniqueID: `0002`,
    fullName: `Okka Adelard`,
    age: 17,
    status: true
}


console.log(`Student 1 Unique ID : ${student1.uniqueID}`)
console.log(`Student 1 Full Name : ${student1.fullName}`)
console.log(`Student 1 Age : ${student1.age}`)
console.log(`Student 1 Status: ${student1.status}`)
console.log(` `)
console.log(`Student 2 Unique ID : ${student2.uniqueID}`)
console.log(`Student 2 Full Name : ${student2.fullName}`)
console.log(`Student 2 Age : ${student2.age}`)
console.log(`Student 2 Status: ${student2.status}`)
console.log(` `)
console.log(`Student 3 Unique ID : ${student3.uniqueID}`)
console.log(`Student 3 Full Name : ${student3.fullName}`)
console.log(`Student 3 Age : ${student3.age}`)
console.log(`Student 3 Status: ${student3.status}`)