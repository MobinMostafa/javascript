function myFunction(){
    // const name = "w3schools"

    // let text =""
    // for ( x of name){
    //     text += x + "<br>"
    //     console.log(x)
    // } 
    function myNumbers(){
        let n = 0
        return {
            next: function(){
                n += 10
                return {value:n, done:false}
            }
        }
    }
    const n = myNumbers()
      n.next()
      n.next()
      n.next()
    document.querySelector(".demo").innerHTML = n.next().value
    console.log(n.next().value)
}