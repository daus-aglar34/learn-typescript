/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type productInformation = {
    productCode: string,
    productName: string,
    productPrice: string,
    stockQuantity: string,
    productWeight: string,
    customerRating: number,
    isDiscounted: boolean
}

const product1: productInformation = {
    productCode: `15ABC`,
    productName: `Kopi ABC`,
    productPrice: `5000`,
    stockQuantity: `13`,
    productWeight: `100gr`,
    customerRating: 5.0,
    isDiscounted: true
}
const product2: productInformation = {
    productCode: `16ABD`,
    productName: `Indomie Goreng`,
    productPrice: `3000`,
    stockQuantity: `23`,
    productWeight: `300gr`,
    customerRating: 4.5,
    isDiscounted: false
}
const product3: productInformation = {
    productCode: `19JTR`,
    productName: `Sabun Cuci Molto`,
    productPrice: `6000`,
    stockQuantity: `21`,
    productWeight: `200gr`,
    customerRating: 3.4,
    isDiscounted: true
}

console.log(`Product ID : ${product1.productCode}`)
console.log(`Product Name : ${product1.productName}`)
console.log(`Product Price : ${product1.productPrice}`)
console.log(`Stock Quantity : ${product1.stockQuantity}`)
console.log(`Product Weight : ${product1.productWeight}`)
console.log(`Customer Rating : ${product1.customerRating}`)
console.log(`Discounted? : ${product1.isDiscounted}`)
console.log(` `)
console.log(`Product ID : ${product2.productCode}`)
console.log(`Product Name : ${product2.productName}`)
console.log(`Product Price : ${product2.productPrice}`)
console.log(`Stock Quantity : ${product2.stockQuantity}`)
console.log(`Product Weight : ${product2.productWeight}`)
console.log(`Customer Rating : ${product2.customerRating}`)
console.log(`Discounted? : ${product2.isDiscounted}`)
console.log(` `)
console.log(`Product ID : ${product3.productCode}`)
console.log(`Product Name : ${product3.productName}`)
console.log(`Product Price : ${product3.productPrice}`)
console.log(`Stock Quantity : ${product3.stockQuantity}`)
console.log(`Product Weight : ${product3.productWeight}`)
console.log(`Customer Rating : ${product3.customerRating}`)
console.log(`Discounted? : ${product3.isDiscounted}`)
console.log(` `)