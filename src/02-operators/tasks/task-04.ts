/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const priceProduct1: number = 850000
const priceProduct2: number = 275000 * 2
const priceProduct3: number = 120000 * 1

let totalProduct: number = priceProduct1 + priceProduct2 + priceProduct3
let isDiscountCustomers: boolean = totalProduct > 1000000 ? true : false
let discountCustomers: number = isDiscountCustomers == true ? 10/100 : 0
console.log(`Subtotal: Rp${totalProduct}`)
console.log(`Disc 10% if total purchase exceeds Rp1000000`)
console.log(`Is it Customer receive Discount? ${isDiscountCustomers}`)
console.log(`Final Payment: ${totalProduct - (totalProduct * discountCustomers)}`)