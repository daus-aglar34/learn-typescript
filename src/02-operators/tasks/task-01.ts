/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

let totalFriedRice: number = 3 * 18000
let totalMineralWater: number = 2 * 5000
let totalFoodDrink: number = totalFriedRice + totalMineralWater
let studentDiscount: number = 10000
let totalAmountPrice: number = totalFoodDrink - studentDiscount


console.log(`Total Price of Fried Rice: Rp${totalFriedRice}`)
console.log(`Total Price of Mineral Water: Rp${totalMineralWater}`)
console.log(`Total Price before discount: Rp${totalFoodDrink}`)
console.log(`Final amount to be paid: Rp${totalAmountPrice}`)