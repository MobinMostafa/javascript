
// let bill = 7000

// if(bill <= 1500 && bill >500){
//     let res = bill + bill*.15
//     console.log("your bill is" + res)
// }else if( bill < 1500 && bill >= 3000){
//     let res = bill + bill*.20
//     console.log("your bill is" + res)
// }else if( bill > 3000){
//     let res = bill + bill*.25
//     console.log("your bill is " + res)
// }else{
//     let res = bill + bill*.10
//     console.log("your bill is " + res)
// }

// function myFunction(){
//     let node = document.querySelector(".myList1").lastChild
//     let clone = node.cloneNode(true)
//     document.querySelector(".myList2").appendChild(clone)
// }

// function myFunction(){

    // object literal firs way 

    // let person = {
    //     name:"mobin mostafa",
    //     age:27,
    //     address: "Dharmapur, Chittagong"
    // }

    // object literal second way 


    // let person = {}
    //  person.name = "mobin mostafa"
    //  person.age = 27
    //  person.address = "Dharmapur, Chittagong"

    // using object the keyword new 

    // const person = { 
    //        name : "mobin mostafa",
    //        age : 27,
    //        address :"Dharmapur , chittagong",
    //        cars: {
    //           car1: "Ford",
    //           car2: "Toyota",
    //           car3: "Lombergine"
    //        }
    //     }
 

        //   person.subject = "web development"

        //   delete person.subject
        //   const x = person
        
    // let text = ""
    // for(let x in person){
    //    text += person[x] + " "
    // }

    // document.querySelector(".demo").innerHTML = `name: ${x.name} age: ${x.age} address: ${person["address"]} cars: ${person["cars"]["car3"]}`
    
// }


function myFunction(){
    const myObj = {
        name: "John",
        age: 30,
        cars: [
          {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
          {name:"BMW", models:["320", "X3", "X5"]},
          {name:"Fiat", models:["500", "Panda"]}
        ]
      } 

    let x = ""
     for(let i in myObj.cars){
        x += "<h1>" + myObj.cars[i].name +"</h1>"
        for(let j in myObj.cars[i].models){
            x += myObj.cars[i].models[j] + "<br>"
        }
     }
    document.querySelector(".demo").innerHTML = x
}