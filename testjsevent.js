var btnNo = document.getElementById("btnNo");
btnNo.addEventListener("mouseover", function () {
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;
  randomX = Math.floor(Math.random() * (innerWidth - 300));
  randomY = Math.floor(Math.random() * (innerHeight - 300));
  console.log(randomX);
  console.log(randomY);
  btnNo.style.left = randomX + "px";
  btnNo.style.top = randomY + "px";
});
