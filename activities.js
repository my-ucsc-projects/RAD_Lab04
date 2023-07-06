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


// --------------------------------Activity 02--------------------------------




