function myFunction(){
     function Person(name, age, profession){
         this.name = name
         this.age = age
         this.profession = profession
         this.car = function(){
            return `my car is Toyota`
         }
    }
    Person.prototype.notionality = "Bangla"
    const myAddress = new Person("Mobin Mostafa", 27, "Web developer")
    const myFriend = new Person("Rafi Ahmed", 25, "Web Designer")

    document.querySelector(".demo").innerHTML = `name: ${myAddress.name} age: ${myAddress.age} profession: ${myAddress.profession} Friend: ${myFriend.name} age: ${myFriend.age} profession: ${myFriend.profession} car: ${myAddress.car()} nationality: ${myAddress.notionality}`
} 