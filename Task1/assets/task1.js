// First name field validation
function validateFname() {
    let fname = document.getElementById("detailForm").fname.value;
  
    // Required field validation
    if (fname == null || fname == "") {
      document.getElementById("fname-error").innerText = "Required field";
      // First name length validation
    } else if (fname.length > 20) {
      document.getElementById("fname-error").innerText =
        "Enter a name upto 20 characters";
    } else {
      document.getElementById("fname-error").innerText = "";
    }
  }
  
  // Last name field validation
  function validateLname() {
    let lname = document.getElementById("detailForm").lname.value;
  
    // Required field validation
    if (lname == null || lname == "") {
      document.getElementById("lname-error").innerText = "Required field";
    }
    // First name length validation
    else if (lname.length > 20) {
      document.getElementById("lname-error").innerText =
        "Enter a name upto 20 characters";
    } else {
      document.getElementById("lname-error").innerText = "";
    }
  }
  
  // Email field validation
  function validateEmail() {
    let email = document.getElementById("detailForm").email.value;
  
    // Required field validation
    if (email == null || email == "") {
      document.getElementById("email-error").innerText = "Required field";
    }
  
    // Email format validation
    else {
      let regex = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/;
      let result = regex.test(email);
      if (!result) {
        document.getElementById("email-error").innerText =
          "Please enter a valid email";
      } else {
        document.getElementById("email-error").innerText = "";
      }
    }
  }
  
  // Phone no. field validation
  function validateContact() {
    let contact = document.getElementById("detailForm").contact.value;
    let regex =
      /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let result = regex.test(contact);
    // Required field validation
    if (contact == null || contact == "") {
      document.getElementById("contact-error").innerText = "Required field";
    }
  
    // Contact format validation
    else {
      if (!result) {
        document.getElementById("contact-error").innerText =
          "Enter a valid contact number";
      } else {
        document.getElementById("contact-error").innerText = "";
      }
    }
  }
  
  // Zip code field validation
  function validateZip() {
    let zip = document.getElementById("detailForm").zip.value;
  
    // Required field validation
    if (zip == null || zip == "") {
      document.getElementById("zip-error").innerText = "Required field";
    }
  
    // Zip code format validation
    else {
      if (zip.length != 6) {
        document.getElementById("zip-error").innerText =
          "Enter a 6 digit zip-code";
      } else {
        document.getElementById("zip-error").innerText = "";
      }
    }
  }
  
  // Date of birth field validation
  function validateDateOfBirth() {
    let dob = document.getElementById("detailForm").dob.value;
  
    // Required field validation
    if (dob == null || dob == "") {
      document.getElementById("dob-error").innerText = "Required field";
    }
  }
  
  // Gender field validation
  function validateGender() {
    let gender = document.getElementById("detailForm").gender.value;
  
    // Required field validation
    if (gender == null || gender == "") {
      document.getElementById("gender-error").innerText = "Required field";
    } else {
      document.getElementById("gender-error").innerText = "";
    }
  }
  
  // Hobby field validation
  function validateHobby() {
    let hobby = [];
    if (document.getElementById("detailForm").cricket.checked == true) {
      hobby.push(document.getElementById("detailForm").cricket.value);
    }
    if (document.getElementById("detailForm").reading.checked == true) {
      hobby.push(document.getElementById("detailForm").reading.value);
    }
    if (document.getElementById("detailForm").traveling.checked == true) {
      hobby.push(document.getElementById("detailForm").traveling.value);
    }
    if (document.getElementById("detailForm").movies.checked == true) {
      hobby.push(document.getElementById("detailForm").movies.value);
    }
  
    // Required field validation
    if (hobby.length == 0) {
      document.getElementById("hobby-error").innerText = "Required field";
    } else {
      document.getElementById("hobby-error").innerText = "";
    }
  }
  
  // Technology field validation
  function validateTechnology() {
    let tech = [];
    for (let option of document.getElementById("detailForm").tech.options) {
      if (option.selected) {
        tech.push(option.value);
      }
    }
  
    // Required field validation
    if (tech == null || tech == "") {
      document.getElementById("tech-error").innerText = "Required field";
    } else {
      document.getElementById("tech-error").innerText = "";
    }
  }
  
  // Function - Validate form
  function validateForm() {
    // Initialize all the field values
    let fname = document.getElementById("detailForm").fname.value;
    let lname = document.getElementById("detailForm").lname.value;
    let email = document.getElementById("detailForm").email.value;
    let contact = document.getElementById("detailForm").contact.value;
    let zip = document.getElementById("detailForm").zip.value;
    let dob = document.getElementById("detailForm").dob.value;
    let gender = document.getElementById("detailForm").gender.value;
    let hobby = [];
    if (document.getElementById("detailForm").cricket.checked == true) {
      hobby.push(document.getElementById("detailForm").cricket.value);
    }
    if (document.getElementById("detailForm").reading.checked == true) {
      hobby.push(document.getElementById("detailForm").reading.value);
    }
    if (document.getElementById("detailForm").traveling.checked == true) {
      hobby.push(document.getElementById("detailForm").traveling.value);
    }
    if (document.getElementById("detailForm").movies.checked == true) {
      hobby.push(document.getElementById("detailForm").movies.value);
    }
  
    let tech = [];
    for (let option of document.getElementById("detailForm").tech.options) {
      if (option.selected) {
        tech.push(option.value);
      }
    }
  
    // Defining regular expression
    let regexEmail = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/;
    let resultEmail = regexEmail.test(email);
  
    let regexContact =
      /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let resultContact = regexContact.test(contact);
  
    // Check for empty fields and throw error if empty
    if (
      fname == null ||
      fname == "" ||
      lname == null ||
      lname == "" ||
      email == null ||
      email == "" ||
      contact == null ||
      contact == "" ||
      zip == null ||
      zip == "" ||
      dob == null ||
      dob == "" ||
      gender == null ||
      gender == "" ||
      hobby == null ||
      hobby == "" ||
      tech == null ||
      tech == ""
    ) {
      alert("Fill the required fields");
      return false;
    }
  
    // Check for fname length
    else if (fname.length > 20) {
      document.getElementById("fname-error").innerText =
        "Enter a name upto 20 characters";
    }
  
    // Check for lname length
    else if (lname.length > 20) {
      document.getElementById("lname-error").innerText =
        "Enter a name upto 20 characters";
    }
    // Check for valid email
    else if (!resultEmail) {
      alert("Please enter a valid email");
      return false;
    }
  
    // Check for valid phone no
    else if (!resultContact) {
      alert("Enter a valid contact number");
      return false;
    }
  
    // Check for valid zip code
    else if (zip.length != 6) {
      alert("Enter a 6 digit zip-code");
      return false;
    }
  
    // Return true if valid input
    else {
      return true;
    }
  }
  
  // Function - Submit form
  function submitForm() {
    // Initialize all the field values
    let fname = document.getElementById("detailForm").fname.value;
    let lname = document.getElementById("detailForm").lname.value;
    let email = document.getElementById("detailForm").email.value;
    let contact = document.getElementById("detailForm").contact.value;
    let zip = document.getElementById("detailForm").zip.value;
    let dob = document.getElementById("detailForm").dob.value;
    let gender = document.getElementById("detailForm").gender.value;
    let hobby = [];
    if (document.getElementById("detailForm").cricket.checked == true) {
      hobby.push(document.getElementById("detailForm").cricket.value);
    }
    if (document.getElementById("detailForm").reading.checked == true) {
      hobby.push(document.getElementById("detailForm").reading.value);
    }
    if (document.getElementById("detailForm").traveling.checked == true) {
      hobby.push(document.getElementById("detailForm").traveling.value);
    }
    if (document.getElementById("detailForm").movies.checked == true) {
      hobby.push(document.getElementById("detailForm").movies.value);
    }
  
    let tech = [];
    for (let option of document.getElementById("detailForm").tech.options) {
      if (option.selected) {
        tech.push(option.value);
      }
    }
  
    // Check for validation
    let validationStatus = validateForm();
  
    // Store data if valid
    if (validationStatus) {
      // Add new data row
      let table = document.getElementById("view-data");
      let row = table.insertRow(1);
  
      // Add cells into new row
      let cell0 = row.insertCell(0);
      let cell1 = row.insertCell(1);
      let cell2 = row.insertCell(2);
      let cell3 = row.insertCell(3);
      let cell4 = row.insertCell(4);
      let cell5 = row.insertCell(5);
      let cell6 = row.insertCell(6);
      let cell7 = row.insertCell(7);
      let cell8 = row.insertCell(8);
      let cell9 = row.insertCell(9);
      let cell10 = row.insertCell(10);
  
      // Insert data into cells
      cell0.innerHTML = '<input type="checkbox" id="select"/>';
      cell1.innerText = fname;
      cell2.innerText = lname;
      cell3.innerText = email;
      cell4.innerText = contact;
      cell5.innerText = zip;
      cell6.innerText = dob;
      cell7.innerText = gender;
      cell8.innerText = hobby;
      cell9.innerText = tech;
      cell10.innerHTML =
        '<input type="button" value="Edit" onclick="viewData(this)"/>';
  
      // Success message and reset form
      alert("Form has been submitted successfully");
      document.getElementById("detailForm").reset();
      return false;
    } else {
      return false;
    }
  }
  
  // Function - Delete data
  function deleteData() {
    // Confirmation of delete from user
    let result = confirm("Are you sure you want to delete?");
  
    if (result) {
      let table = document.getElementById("view-data");
      let rowCount = table.rows;
      let checkedIndexes = [];
      for (let i = 1; i < rowCount.length; i++) {
        let selectedRow = rowCount[i].cells[0].children[0].checked;
        if (selectedRow) {
          checkedIndexes.push(i);
        }
      }
      for (let k = checkedIndexes.length - 1; k >= 0; k--) {
        table.deleteRow(checkedIndexes[k]);
      }
    }
  }
  
  let row;
  function viewData(btn) {
    // Fetch the data of selected row into the form
    document.getElementById("detailForm").reset();
  
    row = btn.parentNode.parentNode;
    document.getElementById("detailForm").fname.value = row.cells[1].innerText;
    document.getElementById("detailForm").lname.value = row.cells[2].innerText;
    document.getElementById("detailForm").email.value = row.cells[3].innerText;
    document.getElementById("detailForm").contact.value = row.cells[4].innerText;
    document.getElementById("detailForm").zip.value = row.cells[5].innerText;
    document.getElementById("detailForm").dob.value = row.cells[6].innerText;
    document.getElementById("detailForm").gender.value = row.cells[7].innerText;
    let hobby = row.cells[8].innerText.split(",");
    if (hobby.includes(document.getElementById("detailForm").cricket.value)) {
      document.getElementById("detailForm").cricket.checked = true;
    }
    if (hobby.includes(document.getElementById("detailForm").reading.value)) {
      document.getElementById("detailForm").reading.checked = true;
    }
    if (hobby.includes(document.getElementById("detailForm").traveling.value)) {
      document.getElementById("detailForm").traveling.checked = true;
    }
    if (hobby.includes(document.getElementById("detailForm").movies.value)) {
      document.getElementById("detailForm").movies.checked = true;
    }
    let tech = row.cells[9].innerText.split(",");
    for (let option of document.getElementById("detailForm").tech.options) {
      if (tech.includes(option.value)) {
        option.selected = true;
      }
    }
  
    // Disable and enable submit and update button respectively
    document.getElementById("submit").disabled = true;
    document.getElementById("update").disabled = false;
  }
  
  function updateData() {
    // Initialize all the field values
    let fname = document.getElementById("detailForm").fname.value;
    let lname = document.getElementById("detailForm").lname.value;
    let email = document.getElementById("detailForm").email.value;
    let contact = document.getElementById("detailForm").contact.value;
    let zip = document.getElementById("detailForm").zip.value;
    let dob = document.getElementById("detailForm").dob.value;
    let gender = document.getElementById("detailForm").gender.value;
    let hobby = [];
    if (document.getElementById("detailForm").cricket.checked == true) {
      hobby.push(document.getElementById("detailForm").cricket.value);
    }
    if (document.getElementById("detailForm").reading.checked == true) {
      hobby.push(document.getElementById("detailForm").reading.value);
    }
    if (document.getElementById("detailForm").traveling.checked == true) {
      hobby.push(document.getElementById("detailForm").traveling.value);
    }
    if (document.getElementById("detailForm").movies.checked == true) {
      hobby.push(document.getElementById("detailForm").movies.value);
    }
  
    let tech = [];
    for (let option of document.getElementById("detailForm").tech.options) {
      if (option.selected) {
        tech.push(option.value);
      }
    }
  
    // Check for validation
    let validationStatus = validateForm();
  
    // Update data if valid
    if (validationStatus) {
      row.cells[1].innerText = fname;
      row.cells[2].innerText = lname;
      row.cells[3].innerText = email;
      row.cells[4].innerText = contact;
      row.cells[5].innerText = zip;
      row.cells[6].innerText = dob;
      row.cells[7].innerText = gender;
      row.cells[8].innerText = hobby;
      row.cells[9].innerText = tech;
  
      alert("Form has been updated successfully");
      document.getElementById("detailForm").reset();
      document.getElementById("submit").disabled = false;
      document.getElementById("update").disabled = true;
      return false;
    } else {
      return false;
    }
  }
  