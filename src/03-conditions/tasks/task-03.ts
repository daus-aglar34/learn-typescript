/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const customerName: string = "Raka Saputra"
const monthlyUsage: number = 124

console.log(`Customer Name: ${customerName}`)
if (monthlyUsage < 50){
    console.log("Highly recommended take Basic Package")
} else if (monthlyUsage >= 50 && monthlyUsage <= 150){
    console.log("Highly recommend take Standard Package")
} else if(monthlyUsage >= 150) {
    console.log("Highly recommend take Advanced Package")
} else {
    console.log("Invalid Package")
}