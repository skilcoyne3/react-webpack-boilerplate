
let hello = document.getElementById("hello");
hello.innerHTML = "Hello from Webpack!";

const appName = 'Webpack Demo App';
setTimeout(
  () => alert(`Thanks for using ${appName}`)
, 500);