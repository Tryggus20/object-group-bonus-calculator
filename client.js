// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//

/*function calculateIndividualEmployeeBonus(employees) {
  // 2 or below no bonus

  for (const employee of employees) {
    console.log(employee);
    if (employee.reviewRating === 3) {
      console.log("4%");
      employee = {...employees.name, bonusPercentage: 0.04};
    } else if (employee.reviewRating === 4) {
      console.log("6%");
    } else if (employee.reviewRating === 5) {
      console.log("10%");
    } else if (employee.reviewRating <= 2) {
      console.log("no bonus");
    }
  }
  // 4 gets 6%
  // 5 gets a 10%
  // employee number 4 digits long, additional 5%
  //if income greater than 65,000, bonus is adjusted down 1%
  // no bonus above 13% or below 0

  // return new object with bonus results
  return "hello";
}
*/

for (let i = 0; i < employees.length; i++) {
  let result = bonusCalc(employees[i]); //passing in every employee
  //console.log(result);
} //end of for loop
function bonusCalc(employee) {
  let obj = {
    name: employee.name, //getting employee name from old object to new
    bonusPercentage: 0, //adding new key to update later
    totalCompensation: 0, //adding new key to update later
    totalBonus: 0, //adding new key to update later
  }; //end of obj

  if (employee.reviewRating === 3) {
    obj.bonusPercentage = 0.04;
    if (employee.employeeNumber.length === 4) {
      obj.bonusPercentage += 0.05;
    }
    console.log("4%");
    console.log(obj);
  } //end of if for 4%
  if (employee.reviewRating === 4) {
    console.log("6%");
    obj.bonusPercentage = 0.06;
    console.log(obj);
  } //end of 6%
  if (employee.reviewRating === 5) {
    console.log("10%");
    obj.bonusPercentage = 0.1;
    console.log(obj);
  } //end of 10%
  if (employee.reviewRating <= 2) {
    console.log("0%");
    obj.bonusPercentage = 0.0;
    console.log(obj);
  } //end of 0% bonus
  /*function addFivePercent(employee) {
    if (employee.employeeNumber > 9999){
      obj.bonusPercentage * 1.05;
    }*/
  return obj;
}
//end bonusCalc
