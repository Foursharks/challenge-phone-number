function createPhoneNumber(numArr) {
let arrFirst =[]; 
let arrSecond =[]; 
let arrThird =[]; 
arrFirst = numArr.slice(0, 3)
arrSecond = numArr.slice(3, 6)
arrThird = numArr.slice(6)
console.log(`(${arrFirst.join(``)}) ${arrSecond.join(``)}-${arrThird.join(``)}`)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); 