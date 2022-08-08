'use strict';
const body = document.getElementsByTagName('body');
var Id= 999;
// constructor

function Employee(fullnameVal, departmentVal, LeveVal , ImageVal, employeeIDVal, salaryVal ) {
    this.fullName = fullnameVal;
    this.department = departmentVal;
    this.level = LeveVal;
    this.imageURL = ImageVal;
    this.employeeID = employeeIDVal;
    this.salary = salaryVal;
    
  
  this.uniqueId= function(counter){
    this.employeeID = counter +1;
    ++Id;
   };
   console.log("Employee name: " , this.fullName);
   console.log("Department: " , this.department);

  this.getRandomSalary= function(min,max) {
    let salaryV= Math.floor(Math.random()*(max- min) + min);
    let netSalary= salaryV-(salaryV*0.075);
    this.salary= salaryV;
    console.log("Employee salary: "+salaryV);
  }

    if(this.level === "Senior"){
        this.getRandomSalary(1500,2000);
    } else if (this.level === "Mid-Senior") {
        this.getRandomSalary(1000,1500);
      } else {
        this.getRandomSalary(500,1000);
      }

    console.log("__________________");



}

// Employee.prototype.printInfoEmployee = function(){
//     document.write(`<p>"Employee name " :${this.fullName} </p>`)
//     document.write(`<p>"Department " :${this.department} </p>`)
//     document.write(`<p>"Employee salary " :${this.salary} </p>`)
//     document.write(`<p>_______________ </p>`)
// }

// Prototype to write in HTML 

Employee.prototype.printInfoEmployee = function() {

  const pE1 = document.createElement('p');
  pE1.textContent= `"Name " :${this.fullName}   `;
  pE1.textContent= `"Department " :${this.department} "- Level":${this.level} `;
  pE1.textContent= `"Salary " :${this.salary} `;
  
  body[0].appendChild(pE1);
  
  }


let employee1 = new Employee("Ghazi Samer", "Administration" , "Senior", "./image/Ghazi.jpg" , 0 , 0);
let employee2 = new Employee("Lana Ali", "Finance" , "Senior", "./image/Lana.jpg" , 0 , 0);
let employee3 = new Employee("Tamara Ayoub", "Marketing" , "Senior", "./image/Tamara.jpg" , 0 , 0);
let employee4 = new Employee("Safi Walid", "Administration" , "Mid-Seniorr", "./image/Safi.jpg" , 0 , 0);
let employee5 = new Employee("Omar Zaid", "Development" , "Senior", "./image/Omar.jpg" , 0 , 0);
let employee6 = new Employee("Rana Saleh", "Development" , "Junior", "./image/Rana.jpg" , 0 , 0);
let employee7 = new Employee("Hadi Ahmad", "Finance" , "Mid-Senior", "./image/Hadi.jpg" , 0 , 0);





employee1.printInfoEmployee();
employee2.printInfoEmployee();
employee3.printInfoEmployee();
employee4.printInfoEmployee();
employee5.printInfoEmployee();
employee6.printInfoEmployee();
employee7.printInfoEmployee();






