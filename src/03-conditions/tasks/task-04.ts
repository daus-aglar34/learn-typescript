/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri"
const premiumMember: boolean = true
const roomAvailable: boolean = false

console.log(`Customer Name: ${customerName}`)
if (roomAvailable){
    console.log(`The Customers is Premium Member: ${premiumMember ? "Yes" : "No"}`)
    if(premiumMember){
        console.log("Receive a Free Room Upgrade")
    } else {
        console.log("Your Room has been Reserved")
    }
} else {
    if(premiumMember){
        console.log("Your in Priority Waiting List")
    } else {
        console.log("There is no available room")
    }
}