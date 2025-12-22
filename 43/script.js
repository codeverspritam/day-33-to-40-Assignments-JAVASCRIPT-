let btn = document.querySelector("button");
let box = document.querySelector("#box");

btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  box.style.backgroundColor = `rgb(${c1}, ${c2},${c3})`;
});

document.getElementById("changeButton").addEventListener("dblclick", () => {
  const box = document.getElementById("box");
  box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
  box.style.animation = "moveBox 1s ease-in-out";
});
