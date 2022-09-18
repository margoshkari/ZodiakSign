let first = document.getElementById("first");
let second = document.getElementById("second");
let text = document.getElementById("result");
let arr = [
  "овен",
  "телец",
  "близнецы",
  "рак",
  "лев",
  "дева",
  "весы",
  "скорпион",
  "стрелец",
  "козерог",
  "водолей",
  "рыбы",
];
const values = [
  [40, 100, 30, 90, 80, 90, 40, 100, 40, 100, 50, 90],
  [80, 100, 20, 100, 70, 90, 90, 100, 40, 100, 50, 80],
  [30, 40, 30, 40, 40, 30, 60, 40, 60, 40, 50, 70],
  [70, 100, 40, 100, 40, 100, 70, 70, 40, 100, 50, 80],
  [90, 100, 50, 100, 70, 70, 60, 50, 70, 70, 50, 90],
  [90, 100, 40, 100, 80, 100, 50, 70, 40, 100, 30, 100],
  [70, 90, 50, 100, 60, 90, 80, 70, 70, 70, 70, 80],
  [90, 100, 40, 60, 80, 100, 60, 40, 40, 100, 50, 90],
  [50, 80, 70, 40, 80, 40, 70, 40, 40, 60, 40, 30],
  [90, 100, 40, 100, 70, 100, 90, 90, 60, 100, 60, 100],
  [60, 70, 50, 60, 60, 40, 70, 50, 40, 70, 30, 60],
  [80, 100, 40, 100, 50, 40, 60, 80, 40, 80, 60, 60],
];

function Show() {
  text.style = "display: block;";
  let i = 0;
  let j = 0;
  if (first.value.length == 0 || second.value.length == 0) {
    text.innerHTML = "Введите значения!";
  } else if (
    !arr.includes(first.value.toLowerCase()) ||
    !arr.includes(second.value.toLowerCase())
  ) {
    text.innerHTML = "Введено неверное значение!";
  } else if (
    arr.includes(first.value.toLowerCase()) &&
    arr.includes(second.value.toLowerCase())
  ) {
    i = arr.findIndex((item) => item == first.value.toLowerCase());
    j = arr.findIndex((item) => item == second.value.toLowerCase());
    text.innerHTML = `Совместимость: ${values[i][j]}%`;
  }
}
