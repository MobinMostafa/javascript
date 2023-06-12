function myFunction(){
    // let x = function (a,b) { return a+b }
    // function sum(x,y){
    //     if(y === undefined){
    //         y=2
    //     }
    //     return x*y
    // }
    // function sum(...args){
    //     let sum = 0
    //     for(arg of args) sum += arg
    //     return sum
    // }
//    function findMax(){
//         let max = -Infinity
//         for (let i = 0; i<arguments.length; i++){
//             if( arguments[i] > max ){
//                 max = arguments[i]
//             }
//         }
//         return max
//     }

// const person = {
//     fullName: function () {
//         return this.firsName + " " + this.lastName
//     }
// }

// const person1 = {
//     firsName: "Mobin",
//     lastName: "Mostafa"
// }
// console.log(person.fullName.call(person1))




   document.querySelector(".demo").innerHTML= add()
       console.dir(add)
//    findMax(4,3,4,5,6,7,8,9,4,5)

//    x(4,5)
//    function sum(a,b){
//     return a+b
//    }


}
// closure
const add =(function (){
    let counter = 0
    return function (){
        counter +=1
        return counter
    }
})() 