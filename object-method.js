function myFunction(){
    const person = {
        name: "mobin mostafa",
        age: 27,
        language: "Bangla",
        sub: "no",
        fulName: function(){
            return `name: ${this.name} age: ${this.age}`
        },
        get lang(){
            return this.language
        },
        set subject(value){
          this.sub = value
        }     
    } 

    person.subject = "Javascript"

    document.querySelector(".demo").innerHTML = person.sub
    // person.lang
    // JSON.stringify(person)
    // Object.values(person)
} 