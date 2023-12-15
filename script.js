
let header = "Template literals"
let tags = ["template literals", "Javascript", "es6"]

let html = `<h1> ${header} </h1>`

for (let x of tags){
    html += `<h2> ${x} </h2>`
}

// let np= Number.EPSILON



let number = [23,3,5,45,6,7,8,24,54,76,12,32]

//******************* */ array method************* //




//****************  sort number to a function **********// 

//*************** */ problem 01

// let myArrayMax = (arr) => {
//    return Math.max.apply(null, arr)
// }

// let newNumber = myArrayMax(number)
// console.log(newNumber)


//*************** */ problem 02

// let lowestNumber = (arr) => {
//    return Math.min.apply(null, arr)
// }

// let lowestNum = lowestNumber(number)

// console.log(lowestNum)


//*************** */ problem 03

// number.sort((a,b) => a-b)
// console.log(number[0])

//*************** */ problem 04

// number.sort((a,b) => b-a)

// console.log(number[0])

//*************** */ problem 05

// const myMaxNumber = (arr) => {
//     let len = arr.length 
//     let max = -Infinity
//     while(len--){
//         if(arr[len] > max){
//             max = arr[len]
//         }
//     }

//     return max

// }

// console.log(myMaxNumber(number))

//*************** */ problem 06

// const myMinNumber = (arr) => {
//    let len = arr.length 
//    let min  = Infinity

//    while(len--){
//     if(arr[len] < min) {
//         min = arr[len]
//     }
//    }
//    return min
// }

// console.log(myMinNumber(number))

//******************* */ array method************* //


let fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon"]

fruits.sort()

// fruits.reverse()


// let newFruits = fruits.slice(0, 3)

// fruits.splice(0,0, "Lemon")
// fruits.push("Lemon")
// fruits[fruits.length] = "jackfruit"

// let newFruits = "<ul>"

// for (let i = 0; i < fruits.length; i++){
//       newFruits += "<li>" + fruits[i] + "</li>"
// }

// fruits.forEach((value) => {
//     newFruits += "<li>" + value + "</li>"
// })

// for (fruit of fruits) {
//     newFruits += "<li>" + fruit + "</li>" 
// }

// newFruits += "</ul>"







 document.getElementById("demo").innerHTML = html + "<br>" + fruits + "<br>" + number



//********************** array iteration *****************//

const numbers = [8,34,45, 4, 9, 16, 25, 26,27]

// let numberStore = ""
// numbers.forEach(value => numberStore += value + '\n' )

// console.log(numberStore)

let myNum = number.map(value =>  value + "<br>")
let MyNum = myNum.join("")

document.querySelector(".numb"). innerHTML = MyNum

