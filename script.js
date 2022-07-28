// 1. create a new project
// 2. create the following inputs
//     - name
//     - age
//     - color
//     - country
//     - gender (bonus - radio)
// 3. on submit show the user a bootstrap card
// with backround as set by the user with his
// information
// 4. clear the data after each submit
// 5. don't insert the bootstrap card if the
// information set by the user is not logical
// for example age < 0, name.length < 2

// ** with each submit insert a new card without deleting previous cards

// BONUS:
// read about window.alert function and show the user the errors he has done in case (section 5) or show it in some bootstrap alert
const btn = document.getElementById("btn");
btn.style.width = "150px";
btn.style.height = "50px";

const userName = document.getElementById("userName");
const userAge = document.getElementById("userAge");
const userColor = document.getElementById("userColor");
const userCountry = document.getElementById("userCountry");
const userIsMale = document.getElementById("male");
const userIsFemale = document.getElementById("female");

function submitUserInfo() {
  if (userName.value.length < 2) {
    clear();
    alert("Did your parents spare on your name?");
    return;
  } else if (userAge.value < 0) {
    clear();
    alert("come back when you're born");
    return;
  }

  const userOutput = document.getElementById("card-output");
  userOutput.innerHTML += `<div class="card" style="width: 25vw; background-color:${
    userColor.value
  }">
<div class="card-body" style="height: 50px"></div>
<ul class="list-group list-group-flush">
  <li id="item1" class="list-group-item">${userName.value}</li>
  <li id="item2" class="list-group-item">${userAge.value}</li>
  <li id="item3" class="list-group-item">${userCountry.value}</li>
  <li id="item4" class="list-group-item">${getGender()}</li>
</ul>
</div>`;
  clear();
}
function getGender() {
  let gender;
  if (userIsMale.checked) {
    gender = "male";
  } else if (userIsFemale.checked) {
    gender = "female";
  }
  return gender;
}
function clear() {
  userName.value = "";
  userAge.value = "";
  userCountry.value = "";
  userColor.value = "";
  userIsMale.checked = false;
  userIsFemale.checked = false;
}
