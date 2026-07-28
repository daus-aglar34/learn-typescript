/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type attendance = {
    employeeID: string,
    employeeName: string,
    date: Date,
    checkInTime: string,
    checkOutTime: string,
    totalWorking: string,
    present: boolean
}

const employees1: attendance = {
    employeeID: `00011`,
    employeeName: `Prabu Panedya`,
    date: new Date(),
    checkInTime: `12.00 WIB`,
    checkOutTime: `13.00 WIB`,
    totalWorking: `1 Hours`,
    present: true
}
const employees2: attendance = {
    employeeID: `00012`,
    employeeName: `Fatih Lintang`,
    date: new Date(),
    checkInTime: `15.00 WIB`,
    checkOutTime: `19.00 WIB`,
    totalWorking: `4 Hours`,
    present: true
}
const employees3: attendance = {
    employeeID: `00013`,
    employeeName: `Tetra Ezar`,
    date: new Date(),
    checkInTime: `-`,
    checkOutTime: `-`,
    totalWorking: `-`,
    present: false
}

console.log(`Employee ID : ${employees1.employeeID}`)
console.log(`Employee Name : ${employees1.employeeName}`)
console.log(`Date : ${employees1.date}`)
console.log(`Check In Time : ${employees1.checkInTime}`)
console.log(`Check Out Time : ${employees1.checkOutTime}`)
console.log(`Total Working : ${employees1.totalWorking}`)
console.log(`Present : ${employees1.present}`)
console.log(` `)

console.log(`Employee ID : ${employees2.employeeID}`)
console.log(`Employee Name : ${employees2.employeeName}`)
console.log(`Date : ${employees2.date}`)
console.log(`Check In Time : ${employees2.checkInTime}`)
console.log(`Check Out Time : ${employees2.checkOutTime}`)
console.log(`Total Working : ${employees2.totalWorking}`)
console.log(`Present : ${employees2.present}`)
console.log(` `)

console.log(`Employee ID : ${employees3.employeeID}`)
console.log(`Employee Name : ${employees3.employeeName}`)
console.log(`Date : ${employees3.date}`)
console.log(`Check In Time : ${employees3.checkInTime}`)
console.log(`Check Out Time : ${employees3.checkOutTime}`)
console.log(`Total Working : ${employees3.totalWorking}`)
console.log(`Present : ${employees3.present}`)
console.log(` `)