/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const applicantName: string = "Andi Wijaya"
const applicantMonthlyIncome: number = 10000000
const creditScore: number = 725
const existingDebt: number = 2500000
const permanentEmployee: boolean = true

console.log(`Applicant Name: ${applicantName}`)
console.log(`Applicant Monthly Income: ${applicantMonthlyIncome}`)
console.log(`Applicant Credit Score: ${creditScore}`)
console.log(`Applicant Existing Debt: Rp${existingDebt}`)
console.log(`Is he/she Permanent Employee: ${permanentEmployee ? "Yes" : "No"}`)
console.log("")
console.log("Evaluates Loan Application....")

if (applicantMonthlyIncome > 8000000 && creditScore > 700){
    console.log("Pass First Screening...")
    console.log("Checking for Second Screening...")
    if (existingDebt < (applicantMonthlyIncome * 0.3) && permanentEmployee){
        console.log("Passed First and Second Screening...")
        console.log("Loan Approved...")
    } else {
        console.log("Passed First Screening but Failed in Second Screening...")
        console.log("Manual Review...")
    }
} else {
    console.log("Failed in both Screening...")
    console.log("Loan Rejected...")
}