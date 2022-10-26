/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  var returnArr = [];
  
  for (let i = 0; i < array.length; i++) { // access employee objects
      var employeeObj = {};
      const elementI = array[i];
      for (let j = 0; j < elementI.length; j++) { // access employee properties
        const elementJ = elementI[j];
        employeeObj[array[i][j][0]] = array[i][j][1]; // assign keys and values
    };
    returnArr.push(employeeObj)
  };

//   console.log(array); // check input
//   console.log(returnArr) // test output

  return returnArr;
};