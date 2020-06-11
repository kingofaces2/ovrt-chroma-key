
document.addEventListener('DOMContentLoaded', function () {
  let username = localStorage.getItem('username')
  if (username !== null) document.getElementById('username').value = username
})

let chatWindowUid = null
let button = document.querySelector('.green-button')

function openChat() {
  let username = document.getElementById('name').value
  if (!username.length) return
  // window.open(`${username}`)
  localStorage.setItem('name', username)
  ovrt.createWebWin(`${username}`)
}

var submit = document.getElementById("submit");

submit.onclick = function(){
	var name = document.getElementById("name").value;
	
	document.getElementById("outputName").innerText = name;
}

function saveStaticDataToFile() {
}