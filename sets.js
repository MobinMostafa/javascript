function myFunction(){
    // const letters = new Set()
    //   letters.add("a")
    //   letters.add("b")
    //   letters.add("c")

    // const a = "a"
    // const b = "b"
    // const c = "c"

    // const letters = new Set()

    // letters.add(a)
    // letters.add(b)
    // letters.add(c)

    const letters = new Set(["a", "b", "c"])

    // const address = new Set({name: "mobin", age:27})


    // letters.add("d")
    // letters.add("e")
    // let text =""
    // letters.forEach((v , i)=> {
    //       text += v + "<br>"
    // })

    let text = ""
    for( const x of letters){
        text += x + "<br>"
    }



    document.querySelector(".demo").innerHTML = letters instanceof Set
}