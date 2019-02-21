// es6 classes

function Person(name, age, height){
    this.name = name
    this.age = age
    this.height = height
}

Person.prototype.speak= function(){
    console.log("im a wizard")
}
const harry = new Person("harry", 14, 60)
// blueprint for objects
class Person {
    // everything it means to be a person
    constructor(name, age, catchPhrase){
        this.name = name
        this.age= age
        this.catchPhrase = catchPhrase
    }
    // what people do 
    speak(){
        return this.catchPhrase
    }
    setHairColor(newColor){
        this.setHairColor = newColor
        return this.hairColor
    }
}

// REST-SPREAD- ES6- ARROw FUNCTIONS

// rest & spread = ...

