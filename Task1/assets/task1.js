function validateName() {
  var nameInput = document.getElementById("name").value;
  var letters = /^[A-Za-z]+$/;
  if (!nameInput) {
    document.getElementById("nameError").textContent = "Name is required";
    return false;
  } else if (nameInput.length > 25) {
    document.getElementById("nameError").textContent = "Name must be at most 25 characters long";
    return false;
  } else if (!letters.test(nameInput)) {
    document.getElementById("nameError").textContent = "Name is incorrect, it must contain alphabets only";
    return false;
  }
  document.getElementById("nameError").textContent = "";
  return true;
}

// Function to validate the email
function validateEmail() {
  var emailInput = document.getElementById("email").value;
  var email_val = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailInput) {
    document.getElementById("emailError").textContent = "Email is required";
    return false;
  } else if (!email_val.test(emailInput)) {
    document.getElementById("emailError").textContent = "Invalid email format, please enter a valid email id";
    return false;
  }
  document.getElementById("emailError").textContent = "";
  return true;
}

// Function to validate the phone number
function validatePhoneNumber() {
  var numInput = document.getElementById("num").value;
  if (!numInput) {
    document.getElementById("numError").textContent = "Phone Number is required";
    return false;
  } else if (numInput.length !== 10 || !/^\d+$/.test(numInput)) {
    document.getElementById("numError").textContent = "Enter a valid Phone Number (10 digits)";
    return false;
  }
  document.getElementById("numError").textContent = "";
  return true;
}

// Function to validate the zip code
function validateZipCode() {
  var zipInput = document.getElementById("zip").value;
  if (!zipInput) {
    document.getElementById("zipError").textContent = "Zip Code is required";
    return false;
  } else if (zipInput.length !== 6 || !/^\d+$/.test(zipInput)) {
    document.getElementById("zipError").textContent = "Enter a valid 6-digit zip code";
    return false;
  }
  document.getElementById("zipError").textContent = "";
  return true;
}

// Function to validate the date of birth
function validateDateOfBirth() {
  var dateOfBirthInput = document.getElementById("doB").value;
  if (!dateOfBirthInput) {
    document.getElementById("dobError").textContent = "Date of Birth is required";
    return false;
  }
  document.getElementById("dobError").textContent = "";
  return true;
}

// Function to validate the gender
function validateGender() {
  var gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById("genderError").textContent = "Select your gender";
    return false;
  }
  document.getElementById("genderError").textContent = "";
  return true;
}

// Function to validate the hobbies
function validateHobbies() {
  var hobbies = document.querySelectorAll('input[name="hobby"]:checked');
  if (hobbies.length === 0) {
    document.getElementById("hobbyError").textContent = "Select at least one hobby";
    return false;
  }
  document.getElementById("hobbyError").textContent = "";
  return true;
}

// Function to validate the technology
function validateTechnology() {
  var technologyInput = document.getElementById("technology").value;
  if (!technologyInput) {
    document.getElementById("technologyError").textContent = "Select a technology";
    return false;
  }
  document.getElementById("technologyError").textContent = "";
  return true;
}
function validateForm() {
  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  var isPhoneNumberValid = validatePhoneNumber();
  var isZipCodeValid = validateZipCode();
  var isDateOfBirthValid = validateDateOfBirth();
  var isGenderValid = validateGender();
  var isHobbiesValid = validateHobbies();
  var isTechnologyValid = validateTechnology();

  // Check if all validations pass
  if (isNameValid && isEmailValid && isPhoneNumberValid && isZipCodeValid &&
    isDateOfBirthValid && isGenderValid && isHobbiesValid && isTechnologyValid) {
    return true;
  } else {
    return false;
  }
}

// Attach an event listener to the form for form submission
document.getElementById("accountForm").addEventListener("submit", function (event) {

  event.preventDefault();

  // Call the validateForm function to check form validity
  var isFormValid = validateForm();
  if (isFormValid) {
    create_account();
  } else {
    alert("Please correct the errors in the form before submission.");
  }
});

function create_account() {
  var nameInput = document.getElementById("name").value;
  var emailInput = document.getElementById("email").value;
  var numInput = document.getElementById("num").value;
  var zipInput = document.getElementById("zip").value;
  var dateOfBirthInput = document.getElementById("doB").value;
  var technologyInput = document.getElementById("technology").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var hobbies = document.querySelectorAll('input[name="hobby"]:checked');

  var selectedHobbies = Array.from(hobbies).map(function (checkbox) {
    return checkbox.value;
  });

  var letters = /^[A-Za-z]+$/;
  var email_val = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/;
  var errors = [];

  if (nameInput.length > 25) {
    errors.push("Name must be at most 25 characters long");
  }
  else if (!nameInput) {
    errors.push("Name is required");
  }
  else if (!letters.test(nameInput)) {
    errors.push("Name is incorrect, it must contain alphabets only");
  }
  if (!emailInput) {
    errors.push("Email is required");
  }
  else if (!email_val.test(emailInput)) {
    errors.push("Invalid email format, please enter a valid email id");
  }
  if (!numInput) {
    errors.push("Phone Number is required");
  }
  else if (numInput.length !== 10 || !/^\d+$/.test(numInput)) {
    errors.push("Enter a valid Phone Number (10 digits)");
  }
  if (!zipInput) {
    errors.push("Zip Code is required");
  }
  else if (zipInput.length !== 6 || !/^\d+$/.test(zipInput)) {
    errors.push("Enter a valid 6-digit zip code");
  }
  if (!dateOfBirthInput) {
    errors.push("Date of Birth is required");
  }
  if (!gender) {
    errors.push("Select your gender");
  }
  if (hobbies.length === 0) {
    errors.push("Select at least one hobby");
  }
  if (!technologyInput) {
    errors.push("Select a technology");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var newAccount = {
      name: nameInput,
      email: emailInput,
      phone: numInput,
      zip: zipInput,
      dob: dateOfBirthInput,
      gender: gender.value,
      technology: technologyInput,
      hobbies: selectedHobbies,
    };
    accounts.unshift(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Congratulations! Your account has been created successfully");

    clearForm();
  }
}

// Function to view all accounts
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

  accounts.forEach(function (account, index) {
    var row = table.insertRow();
    for (var key in account) {
      if (Object.hasOwnProperty.call(account, key)) {
        var cell = row.insertCell();
        cell.textContent = account[key];
      }
    }

    var editCell = row.insertCell();
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      edit_account(index);
    });
    editCell.appendChild(editButton);

    var deleteCell = row.insertCell();
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      delete_account(index);
    });
    deleteCell.appendChild(deleteButton);
  });

  displayData.innerHTML = "";
  displayData.appendChild(table);
}

// Function to edit an account
function edit_account(index) {
  var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  var account = accounts[index];

  if (account) {
    document.getElementById("name").value = account.name;
    document.getElementById("email").value = account.email;
    document.getElementById("num").value = account.phone;
    document.getElementById("zip").value = account.zip;
    document.getElementById("doB").value = account.dob;
    document.getElementById("technology").value = account.technology;

    var updateButton = document.getElementById("updateButton");
    updateButton.style.display = "block";
    updateButton.addEventListener("click", function () {
      update_account();
    });

    // Set the selected gender
    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].value === account.gender) {
        genderRadios[i].checked = true;
        break;
      }
    }

    // Set the selected hobbies
    var hobbies = document.querySelectorAll('input[name="hobby"]');
    var accountHobbies = account.hobbies || [];

    for (var i = 0; i < hobbies.length; i++) {
      hobbies[i].checked = accountHobbies.includes(hobbies[i].value);
    }

    document.getElementById("editedIndex").value = index;
    document.getElementById("updateButton").style.display = "block";
    document.getElementById("accountForm").removeEventListener("submit", create_account);
    document.getElementById("accountForm").addEventListener("submit", function (event) {
      event.preventDefault();
      update_account();
    });
  } else {
    console.error("Account not found at index " + index);
  }

}
document.getElementById("updateButton").addEventListener("click", function () {
  update_account();
});

function update_account() {
  var editedIndex = document.getElementById("editedIndex").value;
  var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  var editedAccount = accounts[editedIndex];


  // Check if the editedAccount exists
  if (editedAccount) {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var numInput = document.getElementById("num").value;
    var zipInput = document.getElementById("zip").value;
    var dateOfBirthInput = document.getElementById("doB").value;
    var technologyInput = document.getElementById("technology").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var hobbies = document.querySelectorAll('input[name="hobby"]:checked');
    console.log("Edited Data:", editedAccount);
    var selectedHobbies = Array.from(hobbies).map(function (checkbox) {
      return checkbox.value;
    });
    editedAccount.name = nameInput;
    editedAccount.email = emailInput;
    editedAccount.phone = numInput;
    editedAccount.zip = zipInput;
    editedAccount.dob = dateOfBirthInput;
    editedAccount.technology = technologyInput;
    editedAccount.gender = gender.value;
    editedAccount.hobbies = selectedHobbies;

    accounts[editedIndex] = editedAccount;

    localStorage.setItem("accounts", JSON.stringify(accounts));

    // Refresh the account list
    view_account();

    // Clear the form
    clearForm();
    alert("Account updated successfully");
  } else {
    // Handle the case where the account to be edited is not found
    alert("Invalid index for editing");
  }
}
// Function to delete an account
function delete_account(index) {
  var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (confirm("Are you sure you want to delete this user?")) {
    accounts.splice(index, 1);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    view_account();
  }
}

// Function to clear the form
function clearForm() {
  document.getElementById("accountForm").reset();
  document.getElementById("updateButton").style.display = "none";
  document.getElementById("accountForm").addEventListener("submit", create_account);

view_account();
}