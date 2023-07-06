// --------------------------------Activity 01--------------------------------
class Rectangle{
    constructor(x,y){
        this.width = x;
        this.height = y;    
    }
    getArea() {
        return (this.width*this.height);
    }
};

const rec = new Rectangle(10,100);

console.log("Width of the rectangle is "+rec.height);

// --------------------------------Activity 02--------------------------------
const rec1 = new Rectangle(10,20);
const rec2 = new Rectangle(5,20);
console.log("Area of the rectangle 1 is "+rec1.getArea());
console.log("Area of the rectangle 2 is "+rec2.getArea());


// --------------------------------Activity 03--------------------------------

class Dog{
    constructor(breed,age,color){
        this.Breed = breed;
        this.Age = age;
        this.Color = color;
    }
    Eat(){
        return this.Breed+" is eating";
    }
    Sleep(){
        return this.Breed+" is sleeping";
    }
    Sit(){
        return this.Breed+" is sitting";
    }
    Run(){
        return this.Breed+" is running";
    }
}

const dog1 = new Dog("Pug",3,"Black");
const dog2 = new Dog("Boxer",2,"White");
const dog3= new Dog("Poodle",1,"Brown");

console.log("Color of 1st dog is "+dog1.color);
console.log(dog1.Eat())
console.log("Color of 2nd dog is "+dog2.color);
console.log(dog2.Sleep())
console.log("Color of 3rd dog is "+dog3.color);
console.log(dog3.Sit())
