/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPriceForNight: number = 650000
const nightStayed: number = 4
const serviceCharge: number = 120000
const vipMember: boolean = true
const tax: number = 11/100
const freeBreakfast: boolean = nightStayed >= 3 || vipMember ? true : false
const discountRoom: number = vipMember ? 12/100 : 0

console.log(`========== Room Reservation ==========`)
console.log(`Room for ${nightStayed} is: Rp ${nightStayed * roomPriceForNight}`)
console.log(`Is the Customer VIP Member? ${vipMember}`)
console.log(`Discount Room for VIP Member: ${discountRoom == 12/100 ? "12%" : "0%"}`)
console.log(`Bill after Discount: ${nightStayed * roomPriceForNight - (nightStayed * roomPriceForNight * discountRoom)}`)
console.log(`Is the Customer eligible for Free Breakfast: ${freeBreakfast}`)
console.log(`Bill after Service Charge: Rp${nightStayed * roomPriceForNight - (nightStayed * roomPriceForNight * discountRoom) + serviceCharge}`)
console.log(`Final Payment: Rp${nightStayed * roomPriceForNight - (nightStayed * roomPriceForNight * discountRoom) + serviceCharge + (nightStayed * roomPriceForNight * tax)}`)