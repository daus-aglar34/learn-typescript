/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const chargingBill: number = 8000
const customerUsed: number = 25235
const totalPlayingTimeMax: number = 18000
const isItTotalPlaying: boolean = customerUsed > totalPlayingTimeMax ? true : false
const isDiscount: number = isItTotalPlaying ? 15/100 : 0

console.log(`Charging Bill per Hour: Rp${chargingBill}`)
console.log(`Customer used for 7 Hours dan 35 Minutes`)
console.log(`Bill Charge: Rp${chargingBill * customerUsed}`)
console.log(`Is the Customers get discount: ${isItTotalPlaying}`)
console.log(`Final Payment: Rp${chargingBill * customerUsed - (chargingBill * customerUsed * isDiscount)}`)