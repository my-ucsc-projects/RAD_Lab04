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

// --------------------------------Activity 03--------------------------------

class employee{
    // lunch :"";
    constructor(empNo,name,address,con,nic,joineddate,desig,sal,lunch){
        this.employeeNo = empNo;
        this.name = name;
        this.Address = address;
        this.contactNo = con;
        this.NIC = nic;
        this.joinDate = joineddate;
        this.designation = desig;
        this.salary = sal;
        this.food = lunch;
    }

    arrive(){
        this.arrivedTime = prompt("Enter the arriving time: ");
        alert(`${this.name} arriving time is${this.arrivedTime}`);
    }
    leave(){
        this.leaveTime = prompt("Enter the leaveing time: ");
        alert(`${this.name} leaving time is${this.leaveTime}`);
    }
    getLunch(){
        this.food = prompt("Enter your lunch preference: ");
        alert(`${this.name}, Your lunch preference is upadated as ${this.food}`);
    }
    reqLeave(){
        this.leaveDate = prompt("Enter your leave date: ");
        this.leaveDays = prompt("Enter your number of days: ");
        this.leaveReason = prompt("Enter your reason: ");
        alert(`${this.name}, Your leave request upadated as (Leave Date:${this.leaveDate}, Leave Days:${this.leaveDays},Leave Reason:${this.leaveReason})`);
    }
}

class tempory extends employee{
    constructor(empNo,name,address,con,nic,joineddate,desig,sal,lunch,duration){
        super(empNo,name,address,con,nic,joineddate,desig,sal,lunch);
        this.duration = duration;
    }
    extention(time){
        if(time<=3){
            this.duration += time;
        }
        else{
            this.getExtention()
        }
    }
    getDuration(){
        var temp = prompt("Enter your working duration(months): ");
        if(temp>6){
            this.getDuration();
        }
        else{
            this.duration = temp;
            alert(`${this.name}, Your working duration is upadated as ${this.duration}`);
        }
        
    }
    getExtention(){
        var temp = prompt("Enter your extention period(months): ");
        if(temp>6){
            this.getDuration();
        }
        else{
            this.duration = temp;
            alert(`${this.name}, Your working duration is upadated as ${this.duration}`);
        }
        
    }
}

class contract extends employee{
    constructor(empNo,name,address,con,nic,joineddate,desig,sal,lunch,duration){
        super(empNo,name,address,con,nic,joineddate,desig,sal,lunch);
        this.duration = duration;
    }
    extention(time){
        if(time<=3){
            this.duration += time;
        }
    }
}

const emp1 = new employee();
emp1.arrive();
emp1.getLunch();
emp1.leave();


