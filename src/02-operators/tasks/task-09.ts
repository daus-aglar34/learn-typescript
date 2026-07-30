/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const mechKeyboardPrice: number = 850000
const mechKeyboardQuantity: number = 1
const wirelessMousePrice: number = 275000
const wirelessMouseQuantity: number = 2
const monitorStandPrice: number = 420000
const monitorStandQuantity: number = 1

const voucherValue: number = 100000
const rewardPointRate: number = 50000
const isPremiumMember: boolean = true
const discount: number = isPremiumMember ? 0.1 : 0

const subTotal = (mechKeyboardPrice * mechKeyboardQuantity) + (wirelessMousePrice * wirelessMouseQuantity) + (monitorStandPrice * monitorStandQuantity)
const totalAfterVoucher: number = subTotal - (subTotal * discount) - voucherValue
const tax: number = totalAfterVoucher * 0.11
const reward: number = totalAfterVoucher / rewardPointRate
const freeShipping = isPremiumMember || totalAfterVoucher > 1500000 ? "Yes" : "No"

console.log(`Product Subtotal: Rp${subTotal}`)
console.log(`Membership discount: Rp${subTotal * discount}`)
console.log(`Voucher Deduction: Rp${voucherValue}`)
console.log(`Payment before tax: Rp${totalAfterVoucher}`)
console.log(`VAT: Rp${tax}`)
console.log(`Final payment: Rp${totalAfterVoucher + tax}`)
console.log(`Reward points: Rp${reward}`)
console.log(`Free shipping eligibility: Rp${freeShipping}`)