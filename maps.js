function myFunction(){
    // const fruits = new Map([
    //     ["apple", 500],
    //     ["banana", 300],
    //     ["orange", 400]
    // ])

    const fruits = new Map()

    fruits.set(apple, 500)
    fruits.set("orange", 400)
    fruits.set("banana", 300)

    let text = ""
    // fruits.forEach((value, key) => {
    //     text += key + " = " + value + "<br>"
    // })

    // for (x of fruits.entries()){
    //     text += x + "<br>"
    // }

    document.querySelector(".demo").innerHTML= fruits.get(apple)
}