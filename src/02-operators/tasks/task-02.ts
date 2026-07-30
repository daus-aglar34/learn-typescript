/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const studentFinalScore: number = 82
const studentAttendance: number = 94
const studentTuitionPaid: boolean = true

const isEligible: boolean = studentFinalScore >= 75 && studentAttendance >= 90 && studentTuitionPaid
console.log(`Is student Eligibles? ${isEligible}`)