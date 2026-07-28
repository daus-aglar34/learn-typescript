/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type studentInformation = {
    studentID: string,
    fullName: string,
    gradeLevel: string,
    courseInfo:{
        courseID: string,
        courseTitle: string,
        instructorName: string,
        totalHours: string
    },
    registrationInfo:{
        registrationDate: Date,
        isRegis: boolean
    }
}

const student1: studentInformation = {
    studentID: `00034`,
    fullName: `Fatih Lintang`,
    gradeLevel: `XI INTL`,
    courseInfo:{
        courseID: `10002`,
        courseTitle: `Web Development`,
        instructorName: `Aryasatya`,
        totalHours: `3 Hours`
    },
    registrationInfo:{
        registrationDate: new Date(),
        isRegis: true
    }
}
const student2: studentInformation = {
    studentID: `01342`,
    fullName: `Tetra Ezar`,
    gradeLevel: `XI RPL 1`,
    courseInfo:{
        courseID: `10010`,
        courseTitle: `Fullstack Engineer`,
        instructorName: `Fatih Lintang`,
        totalHours: `5 Hours`
    },
    registrationInfo:{
        registrationDate: new Date(),
        isRegis: false
    }
}
const student3: studentInformation = {
    studentID: `02561`,
    fullName: `Okka Adelard Syahbarr`,
    gradeLevel: `XI TKJ 3`,
    courseInfo:{
        courseID: `33021`,
        courseTitle: `Cyber Security`,
        instructorName: `Razan Wira`,
        totalHours: `3 Hours`
    },
    registrationInfo:{
        registrationDate: new Date(),
        isRegis: false
    }
}

console.log(`Student Information`)
console.log(student1)
console.log(student2)
console.log(student3)