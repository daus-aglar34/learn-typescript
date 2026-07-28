/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type dataBook = {
    isbnNumber : string,
    bookTitle : string,
    bookData: {
        authorsName: string,
        totalPages: string,
        bookCategory: string
    }
    isBorrowed: boolean
}

const book1: dataBook = {
    isbnNumber: `123456789`,
    bookTitle: `How to learn Premiere Pro in 10 Minutes Part 1`,
    bookData: {
        authorsName: `Fatih Firdaus Ezar`,
        totalPages: `209`,
        bookCategory: `Multimedia`
    },
    isBorrowed: true
}

const book2: dataBook = {
    isbnNumber: `124567893`,
    bookTitle: `How to learn Premiere Pro in 10 Minutes Part 2`,
    bookData: {
        authorsName: `Fatih Firdaus Ezar`,
        totalPages: `300`,
        bookCategory: `Multimedia`
    },
    isBorrowed: true
}

const book3: dataBook = {
    isbnNumber: `125678934`,
    bookTitle: `How to learn Premiere Pro in 10 Minutes Part 3`,
    bookData: {
        authorsName: `Fatih Firdaus Ezar`,
        totalPages: `193`,
        bookCategory: `Multimedia`
    },
    isBorrowed: true
}

console.log(`ISBN Number : ${book1.isbnNumber}`)
console.log(`Book Title : ${book1.bookTitle}`)
console.log(`Author's Name : ${book1.bookData.authorsName}`)
console.log(`Total Pages : ${book1.bookData.totalPages}`)
console.log(`Book Category : ${book1.bookData.bookCategory}`)
console.log(`Has Been Borrowed : ${book1.isBorrowed}`)
console.log(` `)
console.log(`ISBN Number : ${book2.isbnNumber}`)
console.log(`Book Title : ${book2.bookTitle}`)
console.log(`Author's Name : ${book2.bookData.authorsName}`)
console.log(`Total Pages : ${book2.bookData.totalPages}`)
console.log(`Book Category : ${book2.bookData.bookCategory}`)
console.log(`Has Been Borrowed : ${book2.isBorrowed}`)
console.log(` `)
console.log(`ISBN Number : ${book3.isbnNumber}`)
console.log(`Book Title : ${book3.bookTitle}`)
console.log(`Author's Name : ${book3.bookData.authorsName}`)
console.log(`Total Pages : ${book3.bookData.totalPages}`)
console.log(`Book Category : ${book3.bookData.bookCategory}`)
console.log(`Has Been Borrowed : ${book3.isBorrowed}`)
console.log(` `)