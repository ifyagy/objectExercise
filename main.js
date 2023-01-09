"use strict"
// 1. Using a template literal print out the values from the obj below
// E.g "David Rayy is enrolled in class VI and is rollNo 12"
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

console.log(`David Ray is enrolled in class VI and is rollNo 12`);

// 2. Update the name to David Mustermann
student.name = "David Mustermann";

// console log the object and make sure it has been updated
console.log(student);

// 3. Add the following property to the object:
// student age = 11 
student.age = 11;

// 4. Now check if the age is 11 and only in that case you should add the prop basicTest = "passed"
// log the object to check. 
console.log(student);
student["basicTest"] = "passed";

// 5. Use dot notation to add the following prop
// average = 2.4
student.average = 2.4;
console.log(student);

// 6. Check if the average is between 1 and 2.5 and in that case add the prop gymnasium = true
student.gymnasium = "true";

// 7. check if the prop gymnasium exists and in that case freeze the object
console.log(student.gymnasium === undefined);


// 8. Add "use strict" to the top of your file and try to delete prop sclass. 
// What happens when you run your file in the terminal?
delete student.sclass;
console.log(student);
//Answer: The property sclass was deleted

// 9. Create an empty object called myPet
const myPet = { }

// 10. Add the following properties
// name ( contains pet name)
// details ( contains several details about your pet). Which data type could I use to hold multiple values?
myPet.name = "Bingo";
myPet.details = `Black, hairy, feisty`;
console.log(myPet);
//An object can hold multiple values
