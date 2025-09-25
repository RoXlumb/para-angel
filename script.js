const questionContainer = document.getElementById("questionContainer");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// Mover el botón NO cuando el mouse pase por encima
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (window.innerWidth - 100));
  const newY = Math.floor(Math.random() * (window.innerHeight - 50));

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Acción cuando se presiona el SÍ
yesBtn.addEventListener("click", () => {
  heartLoader.style.display = "block";
  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 3000);
});
