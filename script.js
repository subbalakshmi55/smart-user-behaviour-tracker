let visits = localStorage.getItem("visits") || 0;
let clicks = localStorage.getItem("clicks") || 0;

let totalEvents = 0;

visits++;

localStorage.setItem("visits", visits);

document.getElementById("visits").innerText = visits;
document.getElementById("clicks").innerText = clicks;

function addLog(message){

  totalEvents++;

  document.getElementById("events").innerText =
    totalEvents;

  let logs = document.getElementById("logs");

  let div = document.createElement("div");

  div.classList.add("log");

  div.innerHTML = `
    <strong>${message}</strong><br>
    ${new Date().toLocaleString()}
  `;

  logs.prepend(div);
}

addLog("User Visited Website");

document.getElementById("trackBtn").addEventListener("click", ()=>{

  clicks++;

  localStorage.setItem("clicks", clicks);

  document.getElementById("clicks").innerText = clicks;

  addLog("CTA Button Clicked");

});

document.getElementById("signupForm").addEventListener("submit",(e)=>{

  e.preventDefault();

  addLog("Newsletter Form Submitted");

  alert("Subscribed Successfully!");

});

window.addEventListener("scroll", ()=>{

  let scrollTop = document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollPercent = Math.round((scrollTop / height) * 100);

  document.getElementById("scroll").innerText =
    scrollPercent + "%";

});

let seconds = 0;

setInterval(()=>{

  seconds++;

  document.getElementById("time").innerText =
    seconds + " sec";

},1000);

let device = navigator.userAgent;

if(device.includes("Mobile")){
  addLog("Mobile User Detected");
}else{
  addLog("Desktop User Detected");
}

document.getElementById("loginForm").addEventListener("submit",(e)=>{

  e.preventDefault();

  let username =
    document.getElementById("username").value;

  localStorage.setItem("username", username);

  document.getElementById("welcome").innerText =
    "Welcome, " + username;

  addLog("User Logged In");

});

let savedUser = localStorage.getItem("username");

if(savedUser){

  document.getElementById("welcome").innerText =
    "Welcome, " + savedUser;

}