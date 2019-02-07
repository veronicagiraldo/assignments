function Employees(name, jobTitle, salary, status= "Full Time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary 
    this.status = status 
    this.printEmployeeForm = function() {
        console.log(["Name: " + name + ", Job Title: " + jobTitle + ",  Salary: " + salary + ", Status: " + status]); 
    }
}

var employees = [];

var newEmployee = new Employees("Veronica", "Assistant", "$3,000/hour", "part time");
var newEmployeeTwo = new Employees("Emily", "Lawyer", "$100,000/hour", "Contract");
var newEmployeeThree = new Employees("Amy", "Teacher", "$10/hour", "Contract");
newEmployee.printEmployeeForm();
newEmployeeTwo.printEmployeeForm();
newEmployeeThree.printEmployeeForm();