// Mobile Validation
function mobileValidation() {
  let errorMessage = document.getElementById('message')
  let phoneNumber = document.getElementById('phonenumber').value

  if (isNaN(phoneNumber)) {
    errorMessage.innerHTML = 'Only numbers are allowed'
    return false
  }
  if (phoneNumber.length < 10) {
    errorMessage.innerHTML = 'Mobile Number cannot be less than 10 digit'
    return false
  }
  if (phoneNumber.length > 11) {
    errorMessage.innerHTML = 'Mobile Number cannot be greater than 10 digit'
    return false
  }
}
// Mobile Validation End

// Show Table Button
let tableEntry = document.getElementById('table-button')

tableEntry.addEventListener('click', displayData)

let row = 1

function displayData() {
  let name = document.getElementById('firstname').value
  let email = document.getElementById('email').value
  let phoneNumber = document.getElementById('phonenumber').value
  let city = document.getElementById('city').value

  if (!name || !email || !phoneNumber || !city) {
    alert('Please fill the required details')
    return
  }

  let atheleteList = document.getElementById('atheleteList')
  let newRow = atheleteList.insertRow(row)
  let cell1 = newRow.insertCell(0)
  let cell2 = newRow.insertCell(1)
  let cell3 = newRow.insertCell(2)
  let cell4 = newRow.insertCell(3)

  cell1.innerHTML = name
  cell2.innerHTML = email
  cell3.innerHTML = phoneNumber
  cell4.innerHTML = city

  row++
}
// Show Table Button End
