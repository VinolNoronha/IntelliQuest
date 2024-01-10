"Strit mode";

let score = 0;
let correctAnswers = 0;
let wrongAnswers = 10 - correctAnswers;

document.querySelector(".option13").addEventListener("click", function () {
  document.querySelector(".option13").style.backgroundColor = "#04BF10";
  score = score + 1;
  correctAnswers = score;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option12").addEventListener("click", function () {
  document.querySelector(".option12").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option11").addEventListener("click", function () {
  document.querySelector(".option11").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option14").addEventListener("click", function () {
  document.querySelector(".option14").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option21").addEventListener("click", function () {
  document.querySelector(".option21").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option22").addEventListener("click", function () {
  document.querySelector(".option22").style.backgroundColor = "#04BF10";
  score = score + 1;
  correctAnswers = score;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option23").addEventListener("click", function () {
  document.querySelector(".option23").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option24").addEventListener("click", function () {
  document.querySelector(".option24").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option31").addEventListener("click", function () {
  document.querySelector(".option31").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option32").addEventListener("click", function () {
  document.querySelector(".option32").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option33").addEventListener("click", function () {
  document.querySelector(".option33").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option34").addEventListener("click", function () {
  document.querySelector(".option34").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option41").addEventListener("click", function () {
  document.querySelector(".option41").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option42").addEventListener("click", function () {
  document.querySelector(".option42").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option43").addEventListener("click", function () {
  document.querySelector(".option43").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option44").addEventListener("click", function () {
  document.querySelector(".option44").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option51").addEventListener("click", function () {
  document.querySelector(".option51").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option52").addEventListener("click", function () {
  document.querySelector(".option52").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option53").addEventListener("click", function () {
  document.querySelector(".option53").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option54").addEventListener("click", function () {
  document.querySelector(".option54").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option61").addEventListener("click", function () {
  document.querySelector(".option61").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option62").addEventListener("click", function () {
  document.querySelector(".option62").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option63").addEventListener("click", function () {
  document.querySelector(".option63").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option64").addEventListener("click", function () {
  document.querySelector(".option64").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option71").addEventListener("click", function () {
  document.querySelector(".option71").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option72").addEventListener("click", function () {
  document.querySelector(".option72").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option73").addEventListener("click", function () {
  document.querySelector(".option73").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option74").addEventListener("click", function () {
  document.querySelector(".option74").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option81").addEventListener("click", function () {
  document.querySelector(".option81").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option82").addEventListener("click", function () {
  document.querySelector(".option82").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option83").addEventListener("click", function () {
  document.querySelector(".option83").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option84").addEventListener("click", function () {
  document.querySelector(".option84").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option91").addEventListener("click", function () {
  document.querySelector(".option91").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option92").addEventListener("click", function () {
  document.querySelector(".option92").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option93").addEventListener("click", function () {
  document.querySelector(".option93").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option94").addEventListener("click", function () {
  document.querySelector(".option94").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option102").addEventListener("click", function () {
  document.querySelector(".option102").style.backgroundColor = "#04BF10";
  score++;
  correctAnswers++;
  wrongAnswers = 10 - Number(correctAnswers);
});

document.querySelector(".option101").addEventListener("click", function () {
  document.querySelector(".option101").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option103").addEventListener("click", function () {
  document.querySelector(".option103").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".option104").addEventListener("click", function () {
  document.querySelector(".option104").style.backgroundColor = "#BF0F1E";
});

document.querySelector(".submit").addEventListener("click", function () {
  document.querySelector("#score1").textContent = score;
  document.querySelector("#correctans").textContent = Math.floor(
    correctAnswers / 2
  );
  if (wrongAnswers > 0) {
    document.querySelector("#wrongans").textContent = wrongAnswers;
  } else {
    document.querySelector("#wrongans").textContent = 0;
  }
});
