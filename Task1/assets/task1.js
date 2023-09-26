function create_account() {
    var nameInput = document.getElementById("name1").value;
    var emailInput = document.getElementById("email1").value;
    var numInput = document.getElementById("num").value;
    var zipInput = document.getElementById("zip").value;
    var dateOfBirthInput = document.getElementById("doB").value;

    var technology = document.getElementById("technology");
    var technologyInput = technology.value;
    var name = nameInput;
    var email = emailInput;
    var numb = numInput;
    var zip = zipInput;
    var date_of_birth = dateOfBirthInput;
    var gender = document.querySelector('input[name="gender"]:checked');
    var hobby = document.querySelector('input[name="hobby"]:checked ');
    var technology = technologyInput;
    var hobbies = document.querySelectorAll('input[name="hobby"]:checked');
    var selectedHobbies = [];
  
    hobbies.forEach(function (checkbox) {
        selectedHobbies.push(checkbox.value);
    });
  
    //Code for Email validation
    var letters = /^[A-Za-z]+$/;
    var email_val = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/;
    //other validations required code
    if (nameInput.length > 25) {
        alert("Name must be at most 25 characters long");
    } else if (
        name == "" ||
        email == "" ||
        numb == "" ||
        zip == "" ||
        date_of_birth == "" ||
        gender == "" ||
        hobby == "" ||
        technology == ""
    ) {
        alert(
            "Enter each detail correctly, including selecting a technology and gender"
        );
    } else if (!letters.test(name)) {
        alert("Name is incorrect must contain alphabets only");
    } else if (!email_val.test(email)) {
        alert("Invalid email format please enter valid email id");
    } else if (document.getElementById("num").value.length !== 10) {
        alert("Enter a valid Phone-Number (Not 10 digits) ");
    } else if (document.getElementById("zip").value.length !== 6) {
        alert(" Enter Valid zip code");
    } else if (!gender) {
        alert("Select your gender");
    } else if (!hobby) {
        alert("Select your Hobbies");
    } else {
        // Save the data to local storage
        var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        var newAccount = {
            name: name,
            email: email,
            phone: numb,
            zip: zip,
            dob: date_of_birth,
            gender: gender.value,
            technology: technology,
            hobbies: selectedHobbies,
        };
        accounts.unshift(newAccount);
        localStorage.setItem("accounts", JSON.stringify(accounts));
  
        alert("Congratulations! Your account has been created successfully");
  
        clearForm();
    }
  }
  function view_account() {
    var displayData = document.getElementById("display-data");
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var table = document.createElement("table");
  
    table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Zip Code</th>
      <th>Date of Birth</th>
      <th>Gender</th>
      <th>Technology</th>
      <th>Hobbies</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>`;
    console.log(accounts);
    accounts.forEach((account, index) => {
  
        var row = table.insertRow();
  
  
        for (const key in account) {
            if (Object.hasOwnProperty.call(account, key)) {
                var cell = row.insertCell();
                cell.textContent = account[key];
  
            }
        }
  
  
        var editCell = row.insertCell();
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => edit_account(index));
        editCell.appendChild(editButton);
  
        var deleteCell = row.insertCell();
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => delete_account(index));
        deleteCell.appendChild(deleteButton);
    });
  
    displayData.innerHTML = "";
    displayData.appendChild(table);
  }
  function createEditHandler(index) {
    return function () {
        edit_account(index);
    };
  }
  
  function edit_account(index) {
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var account = accounts[index];
  
    if (account) {
        // Populate the form fields with existing data
        document.getElementById("name1").value = account.name;
        document.getElementById("email1").value = account.email;
        document.getElementById("num").value = account.phone;
        document.getElementById("zip").value = account.zip;
        document.getElementById("doB").value = account.dob;
        var technology = document.getElementById("technology");
        technology.options[technology.selectedIndex].text = account.technology;
        var element = document.getElementById('updateButton');
        element.style.display = null;
  
        // Populate the gender radio buttons based on the existing data
        var genderRadios = document.getElementsByName("gender");
        for (var i = 0; i < genderRadios.length; i++) {
            if (genderRadios[i].value === account.gender) {
                genderRadios[i].checked = true;
                break;
            }
        }
  
        // Populate the checkboxes based on the existing data
        var hobbies = document.getElementsByName("hobby");
        var accountHobbies = account.hobbies || [];
  
        for (var i = 0; i < hobbies.length; i++) {
            hobbies[i].checked = accountHobbies.includes(hobbies[i].value);
        }
    } else {
        console.error("Account not found at index " + index);
    }
  
    // Update the account data when the user clicks the "Update" button
    document.getElementById("updateButton").onclick = function () {
        // Update the account data with values from the form fields
        account.name = document.getElementById("name1").value;
        account.email = document.getElementById("email1").value;
        account.phone = document.getElementById("num").value;
        account.zip = document.getElementById("zip").value;
        account.dob = document.getElementById("doB").value;
        var technology = document.getElementById("technology");
        account.technology = technology.options[technology.selectedIndex].text
  
        // Update the gender based on the selected radio button
        for (var i = 0; i < genderRadios.length; i++) {
            if (genderRadios[i].checked) {
                account.gender = genderRadios[i].value;
                break;
            }
        }
  
        // Update the hobbies based on the selected checkboxes
        account.hobbies = [];
        for (var i = 0; i < hobbies.length; i++) {
            if (hobbies[i].checked) {
                account.hobbies.push(hobbies[i].value);
            }
        }
  
        // Update the modified account in the accounts array
        accounts[index] = account;
  
        // Update the accounts array in local storage
        localStorage.setItem("accounts", JSON.stringify(accounts));
  
        // Clear the form fields and display the updated data
        clearForm();
        view_account();
    };
  }
  
  
  // Function to clear the form fields
  function clearForm() {
    const table = document.getElementById("myTable");
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("num").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("doB").value = "";
  
    // Reset radio buttons to their default state (unselected)
    document.getElementById("men").checked = false;
    document.getElementById("women").checked = false;
  
    // Reset checkboxes to their default state (unchecked)
    document.getElementById("hob1").checked = false;
    document.getElementById("hob2").checked = false;
    document.getElementById("hob3").checked = false;
  
    // Reset the select dropdown to its default state (unselected)
    document.getElementById("technology").selectedIndex = 0;
    
  }
  
  function createDeleteHandler(index) {
    return function () {
        delete_account(index);
    };
  }
  var viewButton = document.getElementById("viewButton");
  if (viewButton) {
    viewButton.addEventListener("click", displayDataInTable);
  }
  
  
  function delete_account(index) {
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    alert("are you sure want to delete user");
  
    // Remove the account at the specified index
    accounts.splice(index, 1);
  
    // Update the accounts array in local storage
    localStorage.setItem("accounts", JSON.stringify(accounts));
  
    // Refresh the displayed data
    view_account();
  }
  
  // Function to update user data from local storage
  function updateUserData() {
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var indexToUpdate = accounts.length - 1;
  
    if (indexToUpdate >= 0 && indexToUpdate < accounts.length) {
        var accountToUpdate = accounts[indexToUpdate];
  
        // Update the user data with values from the form fields
        accountToUpdate.name = nameInput;
        accountToUpdate.email = emailInput;
        accountToUpdate.phone = numInput;
        accountToUpdate.zip = zipInput;
        accountToUpdate.dob = dateOfBirthInput;
        accountToUpdate.technology = technologyInput;
  
        // Update the gender based on the selected radio button
        var genderRadios = document.getElementsByName("gender");
        for (var i = 0; i < genderRadios.length; i++) {
            if (genderRadios[i].checked) {
                accountToUpdate.gender = genderRadios[i].value;
                break;
            }
        }
  
        // Update the hobbies based on the selected checkboxes
        var hobbies = document.querySelectorAll('input[name="hobby"]:checked');
        var selectedHobbies = [];
  
        hobbies.forEach(function (checkbox) {
            selectedHobbies.push(checkbox.value);
        });
  
        accountToUpdate.hobbies = selectedHobbies;
  
        // Update the modified user data in the accounts array
        accounts[indexToUpdate] = accountToUpdate;
  
        // Update the accounts array in local storage
        localStorage.setItem("accounts", JSON.stringify(accounts));
        document
            .getElementById("updateButton")
            .addEventListener("click", updateUserData);
  
        // Clear the form fields and display the updated data
        clearForm();
        view_account();
    } else {
        console.error("Invalid index to update");
    }
  }