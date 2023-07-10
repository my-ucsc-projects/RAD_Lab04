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
function act1(){
    alert("Width of the rectangle is "+rec.height)
}

// --------------------------------Activity 02--------------------------------
const rec1 = new Rectangle(10,20);
const rec2 = new Rectangle(5,20);
console.log("Area of the rectangle 1 is "+rec1.getArea());
console.log("Area of the rectangle 2 is "+rec2.getArea());

function act2(){
    alert("Area of the rectangle 1 is "+rec1.getArea()+"\nArea of the rectangle 2 is "+rec2.getArea())
}

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

function act3(){
    alert("Color of 1st dog is "+dog1.color+"\n"+dog1.Eat()+"\nColor of 2nd dog is "+dog2.color+"\n"+dog2.Sleep()+"\nColor of 3rd dog is "+dog3.color+"\n"+dog3.Sit())
}
// --------------------------------Activity 04--------------------------------

class employee{
    // lunch :"";
    constructor(empNo,name,address,con,nic,desig,sal,lunch,joineddate){
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
    constructor(empNo,name,address,con,nic,desig,sal,lunch,duration,joineddate){
        super(empNo,name,address,con,nic,desig,sal,lunch,joineddate);
        if(duration>6){
            this.getDuration();
        }
        else{
            this.duration = duration;
        } 
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
        if(this.duration+temp>9){
            this.getExtention();
        }
        else{
            this.duration = temp;
            alert(`${this.name}, Your extention period is upadated. Now your working duration is ${this.duration}`);
        }
        
    }
}

class contract extends employee{
    constructor(empNo,name,address,con,nic,desig,sal,lunch,duration,joineddate){
        super(empNo,name,address,con,nic,desig,sal,lunch,joineddate);
        if(duration>6){
            this.getDuration();
        }
        else{
            this.duration = duration;
        } 
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
        if(this.duration+temp>9){
            this.getExtention();
        }
        else{
            this.duration = temp;
            alert(`${this.name}, Your extention period is upadated. Now your working duration is ${this.duration}`);
        }
        
    }
}

const emp1 = new employee(1,"Ravindu","Kalutara","0771234567","1000","Software Engineer",300000.00,"non-veg","2020.12.31");
const emp2 = new tempory(2,"Dasun","Panadura","0772345678","2000","Intern",30000.00,"veg",5,"2021.12.31");
const emp3 = new contract(3,"Visal","Panadura","0773456789","3000","Developer",150000.00,"non-veg",10,"2021.12.31");

function act4(){
    alert(`Employee No: ${emp1.employeeNo}\nEmployee Name: ${emp1.name}\nEmployee Adress: ${emp1.Address}\nEmployee Contact No: ${emp1.contactNo}\nEmployee Join Date: ${emp1.joinDate}\nEmployee Designation: ${emp1.designation}\nEmployee Salary: ${emp1.salary}`);
    alert(`Employee No: ${emp2.employeeNo}\nEmployee Name: ${emp2.name}\nEmployee Adress: ${emp2.Address}\nEmployee Contact No: ${emp2.contactNo}\nEmployee Join Date: ${emp2.joinDate}\nEmployee Designation: ${emp2.designation}\nEmployee Salary: ${emp2.salary}\nEmployee Duration: ${emp2.duration}`);
    alert(`Employee No: ${emp3.employeeNo}\nEmployee Name: ${emp3.name}\nEmployee Adress: ${emp3.Address}\nEmployee Contact No: ${emp3.contactNo}\nEmployee Join Date: ${emp3.joinDate}\nEmployee Designation: ${emp3.designation}\nEmployee Salary: ${emp3.salary}\nEmployee Duration: ${emp3.duration}`);
}
