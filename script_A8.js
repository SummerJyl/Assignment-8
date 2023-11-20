// M8 Assignment - Part 2, The Employee Management System (80 points)
// In this assignment you will build on the M7 Assignment. If you recall, in the M7 Assignment, the user was able to add an employee, view that employee within the grid, and then delete an employee by clicking the delete button that appears to the right of each row. While this was a great learning opportunity as it relates to DOM scripting, it wasn’t realistic as it didn’t allow you to persist the employee data in any way. When the browser was closed, the data was gone and had to be reentered again. In this version, you will modify the application to use arrays and then store the populated array within web storage (localStorage) in order to persist the data across browser sessions.
// The Interface
// As was the case in M7 Assignment, the UI has been created for you using Bootstrap and will look identical to the M7 Assignment. You will not need to touch the HTML.
// Pay close attention to the table markup of this version of the assignment however. You will create the row structure differently in this assignment than what you did in the M7 Assignment. More on this in a bit.
// Loading an Initial Set of Employees

// For this assignment you will use arrays to structure your data. You will need to create an initial array and populate it with at least 5 employees. When the page loads, the grid should automatically populate with those initial 5 employees. The data for each employee should be structured so that you’re storing the employee ID (number), employee name (string), 4 digit extension (number), email (string), and department (string).
let employee = [];
let employee1 = { id: "2341", name: "John Doe",   extension:     4130, email: "john@vectacorp.com",   department:   "Engineering"};
let employee2 = { id: "2342", name: "Jane Smith", extension:     4131, email: "jane@vectacorp.com",   department:   "Research"};
let employee3 = { id: "2343", name: "Jylian Summers", extension: 4132, email: "jylian@vectacorp.com", department: "Development" };
let employee4 = { id: "2344", name: "Joseph Kato", extension:    4233, email: "joseph@vectacorpcom",  department:  "UX Developer" };
let employee5 = { id: "2345", name: "Green Hornet", extension:   4234, email: "green@vectacorp.com",  department:  "Marketing" };

employees.push(employee1, employee2, employee3, employee4, employee5);

console.log(employees);
// Building the Grid

// In the M8 Assignment you used the table’s DOM methods insertRow(), insertCell(), and deleteRow() to manipulate the row structure for the table. In this assignment you will take a different approach. In this assignment, you’ll see the table includes a <tbody> tag. Use this tag as a ‘hook’ and rely on the innerHTML property to programmatically construct the row and cell structure for the table using a template literal string.
let tableHTML = '<table>';

for (let i = 0; i < employees.length; i++) {
  tableHTML += `
    <tr>
      <td>${employees[i].id}</td>
      <td>${employees[i].extension}</td>
      <td>${employees[i].name}</td>
      <td>${employees[i].email}</td>
      <td>${employees[i].department}</td>
    </tr>
  `;
}
tableHTML += '</tbody></table>';

document.getElementById('tableContainer').innerHTML = tableHTML;

// <div id="tableContainer"></div>
// Considerations:

// This will be its own function. It will be called when the page loads, when an employee is added, and when an employee is deleted.
// Use a for / of loop here to loop through the array and build each row in code.
// Use the appendChild() method to append the constructed row to the <tbody> tag.
let tbody = document.createElement('tbody');

for (let i = 0; i < employees.length; i++) {
  let row = document.createElement('tr');

  let idCell = document.createElement('td');
  idCell.textContent = employees[i].id;
  row.appendChild(idCell);

  let extensionCell = document.createElement('td');
  extensionCell.textContent = employees[i].extension;
  row.appendChild(extensionCell);

  let nameCell = document.createElement('td');
  nameCell.textContent = employees[i].name;
  row.appendChild(nameCell);

  let emailCell = document.createElement('td');
  emailCell.textContent = employees[i].email;
  row.appendChild(emailCell);

  let departmentCell = document.createElement('td');
  departmentCell.textContent = employees[i].department;
  row.appendChild(departmentCell);

  tbody.appendChild(row);
}
// Append the row to the grid element
gridElement.appendChild(row);

document.getElementById('tableContainer').appendChild(tbody);

// Adding and Removing Data
// You’ll need two separate functions for adding and removing employees. Remember to pass the array into these functions and then use array specific methods to add / remove employees from 
// the array. Don’t forget to call the function to build the grid once an employee has been added or removed.
// ADD EMPLOYEE
function add(employees) {
    let employee = prompt('Enter the employee\'s name')               // PROMPT USER FOR EMPLOYEE TO ADD
    employees.push(employee)                                          // ADD EMPLOYEE TO ARRAY
    console.log(`${employee} was added.`)                             // SHOW SUCCESS MESSAGE
    console.log('')
}

// REMOVE EMPLOYEE
function remove(employees) {                                            
    let emplID = parseInt(prompt('Enter the employee\'s ID to remove.'))// PROMPT USER FOR EMPLOYEE ID TO REMOVE
    if (emplID >= 1 && emplID <= employees.length) {                    // MAKE SURE THE NUMBER IS VALID
        let employee = employees.splice(emplID - 1, 1)                  // SPLICE OUT EMPLOYEE TO REMOVE
        console.log(`${employee} was deleted.`)                         // SHOW SUCCESS MESSAGE
        console.log('')
    } else {
        alert('Invalid employee ID.')
    }
}

// FUNCTION TO CALL WHEN PAGE LOADS
function init() {
    // BEGIN BY SHOWING A MAIN MENU
    console.log('EMPLOYEE MANAGEMENT APPLICATION')
    console.log('-------------------------------')
    console.log('COMMAND MENU')
    console.log('view - view all employees')
    console.log('add - add an employee')
    console.log('remove - remove an employee')
    console.log('exit - exit the application')
    console.log('')
}

// Considerations:
// When a new employee is added, you’ll need to create a new array. This array is what will be added into the main employees array.
// BUILD OUT INITIAL ARRAY OF EMPLOYEES
    let employees = [
        'Zak Ruvalcaba',
        'Sally Smith',
        'Pepe Ramirez',
        'Joe Johnson',
        'Stew Franklin'
    ]

// Storing Data
// Use web storage (localStorage) to persist the array. It should be stored when the page loads / when the grid is built, when a new employee is added, and when an employee is deleted. When 
// the page loads, make sure to check to see if the object exists in storage before you attempt to extract the data from storage.
if (localStorage.getItem('employees')) {
  // Data already exists in localStorage, this will retrieve it
  employees = JSON.parse(localStorage.getItem('employees'));
} else {
  // Data doesn't exist in localStorage, this stores initial array
  localStorage.setItem('employees', JSON.stringify(employees));
}
employees.push(newEmployee);

// Storing updated array in localStorage
localStorage.setItem('employees', JSON.stringify(employees));
// Assume the index of the employee to delete is stored in 'index'

employees.splice(index, 1);

// Considerations
// You’ll need to use JSON.stringify() to store the array in storage.
// You’ll need to use JSON.parse() to retrieve the array from storage.
// Enter Web URL
// Website url
// HTML element with id "grid" to display the grid
let gridElement = document.getElementById("grid");

// Loop through the employees array and create a row for each employee
employees.forEach((employee) => {
  // Create a new row element
  let row = document.createElement("div");
  row.classList.add("row");

  // Create columns for each employee property
  let idColumn = document.createElement("div");
  idColumn.innerText = "ID: " + employee.id;
  row.appendChild(idColumn);

  let nameColumn = document.createElement("div");
  nameColumn.innerText = "Name: " + employee.name;
  row.appendChild(nameColumn);

  let extensionColumn = document.createElement("div");
  extensionColumn.innerText = "Extension: " + employee.extension;
  row.appendChild(extensionColumn);

  let emailColumn = document.createElement("div");
  emailColumn.innerText = "Email: " + employee.email;
  row.appendChild(emailColumn);

  let departmentColumn = document.createElement("div");
  departmentColumn.innerText = "Department: " + employee.department;
  row.appendChild(departmentColumn);

  // Append the row to the grid element
  gridElement.appendChild(row);
});