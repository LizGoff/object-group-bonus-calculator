const atticus = {
     name: 'Atticus',
     employeeNumber: '2405',
     annualSalary: '47000', 
     reviewRating: 3 
    };
const jem = { 
    name: 'Jem', 
    employeeNumber: '62347', 
    annualSalary: '63500', 
    reviewRating: 4
     };
const scout = { 
    name: 'Scout', 
    employeeNumber: '6243', 
    annualSalary: '74750', 
    reviewRating: 5 
    };
const robert = { 
    name: 'Robert', 
    employeeNumber: '26835', 
    annualSalary: '66000', 
    reviewRating: 1 
    };
const mayella = { 
    name: 'Mayella', 
    employeeNumber: '89068', 
    annualSalary: '35000', 
    reviewRating: 2 
    };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);




class Employee {
    constructor(name, bonusPercentage, totalCompensation, totalBonus) {
        this.name = name;
        this.bonusPercentage = bonusPercentage;
        this.totalCompensation = totalCompensation;
        this.totalBonus = totalBonus;
    }
}

let newEmployee = [];

function addNewEmployees(name) {
    let employeName = new Employee(name);
    newEmployee.push(employeName);
    return employeName
}

addNewEmployees('Atticus');
addNewEmployees('Jem');
addNewEmployees('Scout');
addNewEmployees('Robert');
addNewEmployees('Mayella');

console.log(newEmployee);

let ratingArray =[];

function employeeRating(totalBonus) {
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].reviewRating <= 2) {
            ratingArray.push(employees[i].annualSalary * 0); 
        }
        else if(employees[i].reviewRating = 3) {
            ratingArray.push(employees[i].annualSalary * 0.04); 
        }
        else if(employees[i].reviewRating = 4) {
                ratingArray.push(employees[i].annualSalary * 0.06);
        }
        else if(employees[i].reviewRating = 5) {
                    ratingArray.push(employees[i].annualSalary * 0.10); 
            //console.log (employees[i].name); 
        
        }
    }
}

employeeRating();

//console.log(employeeRating('Atticus'));



/*  if(employees[i].reviewRating == 3) {
            employees.push(new Employee(bonusPercentage))
            return '4%';
        } if(employees[i].reviewRating == 4) {
            employees.push(new Employee(bonusPercentage))
            return '6%';     
        } else if(employees[i].reviewRating == 5) {
            employees.push(new Employee(bonusPercentage))
            return '10%'; */




    
