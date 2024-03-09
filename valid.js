

const form = document.getElementById("form");
const employeeName = document.getElementById("employeeName");
const gender = document.getElementById("gender");
const department = document.getElementById("department");

const dateOfJoin = document.getElementById("dateOfJoin");
const email = document.getElementById("email");



document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  validateInputs();
}) ; 



function validateInputs () {
  const empNameVal = employeeName.value.trim();
  const genderVal = gender.value.trim();
  const deptVal = department.value.trim();
 
  const dateOfJoinVal = dateOfJoin.value.trim();
  const emailVal = email.value.trim();


if (empNameVal === '') {
  setError(employeeName, 'Name is required');
 
} else {
  setSuccess(employeeName)
}


if (genderVal === '') {
  setError(gender, 'field is not filled');
 
} else {
  setSuccess(gender)
}



if ( deptVal=== '') {
  setError(department, 'field is not filled');
 
} else {
  setSuccess(department)
}



if (dateOfJoinVal === '') {
  setError(dateOfJoin, 'Please enter a valid input');

} else {
  setSuccess(dateOfJoin)
}


if (emailVal === '') {
  setError(email, 'Email is required');
 
} else if (!validateEmail(emailVal)) {
  setError(email, 'Please enter a valid email');
 
} else {
  setSuccess(email);
}



};



function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');

  errorElement.innerText = message;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');


 }


 function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  
  errorElement.innerText = '';
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');



 }

 const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );

    
};




