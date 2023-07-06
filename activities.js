// --------------------------------Activity 01--------------------------------
class Rectangle{
    constructor(x,y){
        this.width = x;
        this.height = y;    
    }
    // function getArea() {
    //     return (this.width*this.height);
    // }
    // getArea: functio() {
    //     // console.log(this.width*this.height);
    //     return (this.width*this.height);
    // }
};

const rec = new Rectangle(10,100);

console.log("Width of the rectangle is "+rec.height);
console.log(rec.getArea);
