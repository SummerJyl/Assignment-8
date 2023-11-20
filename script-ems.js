// CREATE AN ARRAY OF EMPLOYEES
var employees = ["Jylian Summers", "Zak Ruvalcaba", "John Smith", "Patty Dune", "Sally Sewer"];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

if (localStorage.getItem("employees")) {
    // The "employees" storage object exists
    console.log("The 'employees' storage object exists.");

// GET DOM ELEMENTS
const element = document.getElementById("employees");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// Array of employees
var employees = ["Jylian Summers", "Zak Ruvalcaba", "John Smith", "Patty Dune", "Sally Sewer"];

// Function to build employees table
function buildEmployeesTable() {
  var tableBody = document.querySelector("#employeesTable tbody");

  // Iterate over employees array
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];

    // Create a new table row
    var row = document.createElement("tr");

    // Create a new table cell for employee name
    var cell = document.createElement("td");

    // Set the text content of the cell to employee name
    cell.textContent = "Jylian Summers";
    cell.textContent = "Zak Ruvalcaba";
    cell.textContent = "John Smith";
    cell.textContent =  "Patty Dune";
    cell.textContent = "Sally Sewer";

    // Append the cell to the row
    row.appendChild(cell);

    // Append the row to the table body
    tableBody.appendChild(row);
  }
}
// Call the buildEmployeesTable function when the page loads
window.addEventListener("load", buildEmployeesTable);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    function add(employees) {
        let employee = prompt('Enter the employee\'s name')               // PROMPT USER FOR EMPLOYEE TO ADD
        employees.push(employee)                                          // ADD EMPLOYEE TO ARRAY
        console.log(`${employee} was added.`)                             // SHOW SUCCESS MESSAGE
        console.log('')
    }
    let form = document.getElementById("myForm");                        // PREVENT FORM SUBMISSION
            form.addEventListener("submit", function(event) {            // Attach event listener to the form submission event
            event.preventDefault();                                      // Prevent the default form submission behavior
            }
    // GET THE VALUES FROM THE TEXT BOXES
    let idInput         = document.getElementById("idInput");
    let extensionInput  = document.getElementById("extensionInput");
    let nameInput       = document.getElementById("nameInput");
    let emailInput      = document.getElementById("emailInput");
    let departmentInput = document.getElementById("departmentInput");

    // Get the values from the text boxes
    let idValue         = idInput.value;
    let extensionValue  = extensionInput.value;
    let nameValue       = nameInput.value;
    let emailValue      = emailInput.value;
    let departmentValue = departmentInput.value;

    // Do something with the values
    console.log("Id:", idValue);
    console.log("Extension:", extensionValue);
    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Department:", departmentValue);

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
        // New employee object
        let newEmployee = {
            id: newId,
            name: newName,
            extension: newExtension,
            email: newEmail,
            department: newDepartment
  };
        // New array to store the employees
        let newEmployees = [];
        
        // New employee object to the new array
        newEmployees.push(newEmployee);

        // Push new array to *EXISTING* EMPLOYEES ARRAY
        newEmployees.push(newEmployee);
    // BUILD THE GRID

    // RESET THE FORM
    // Form with id "myForm"
        let form = document.getElementById("employeeForm");

    // Reset the form
        form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    let idInput = document.getElementById("idInput");

    // Reset the form
    form.reset();
    
    // Set focus back to the ID text box
    idInput.focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
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