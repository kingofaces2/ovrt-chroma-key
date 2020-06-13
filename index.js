
document.addEventListener('DOMContentLoaded', function () {
  let username = localStorage.getItem('username')
  if (username !== null) document.getElementById('username').value = username
})

let chatWindowUid = null
let button = document.querySelector('.green-button')

function openChat() {
  let username = document.getElementById('username').value
  if (!username.length) return
  // window.open(`${username}`)
  localStorage.setItem('username', username)
  //ovrt.createWebWin(`${username}`)
  window.location.src = `${username}`, 400, 500;
}

function changeSite() {
	console.log(link);
	
	// console.log(document.getElementById("name").value);
	// console.log(document.getElementById("name").innerText);
	
	document.getElementById("outputName").src = link;
}

function runHtml() {
	document.getElementById("openChat").src = document.getElementById("name").value;
	document.body.style.backgroundColor= "transparent";
	myFunction();
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
  var y = document.getElementById("textField");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function inputFocused() {
	SetKeyboardFocus(true);
}

function inputLost() {
	SetKeyboardFocus(false);
}

