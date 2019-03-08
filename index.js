const canvas = document.getElementById("chaos");
const ctx = canvas.getContext("2d");
let currentColor = document.getElementById("color").value;
document.getElementsByClassName("control")[0].style.color = currentColor;
document.getElementsByTagName("button")[0].style.backgroundColor = currentColor;

const globalColor = document.getElementById("color");
globalColor.addEventListener("change", e => {
  currentColor = e.target.value;
  document.getElementsByClassName("control")[0].style.color = currentColor;
  document.getElementsByTagName(
    "button"
  )[0].style.backgroundColor = currentColor;
});

const GenerateRand = () => (Math.random() * 7) | 0;
const updateDot = (x, y, point) => {
  let X =
    Math.min(x, point.x) + (Math.max(x, point.x) - Math.min(x, point.x)) / 2;
  let Y =
    Math.min(y, point.y) + (Math.max(y, point.y) - Math.min(y, point.y)) / 2;
  return { x: X, y: Y };
};
const createDot = obj => {
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, 1, 0, 2 * Math.PI, false);
  ctx.lineWidth = 1;
  ctx.strokeStyle = currentColor;
  ctx.stroke();
};

const points = [
  { x: canvas.width / 2, y: 5 },
  { x: 5, y: canvas.height - 5 },
  { x: canvas.width - 5, y: canvas.height - 5 }
];

const begin = iterations => {
  let x = canvas.width / 4;
  let y = canvas.height / 2;
  for (let i = 0; i < iterations; i++) {
    createDot({ x, y });
    let randN = GenerateRand();
    const currentDot =
      randN == 1 || randN == 2
        ? updateDot(x, y, points[0])
        : randN == 3 || randN == 4
        ? updateDot(x, y, points[1])
        : updateDot(x, y, points[2]);
    x = currentDot.x;
    y = currentDot.y;
  }
};

function start() {
  let time = 0;
  let timer = setInterval(() => {
    if (time >= 500) return clearInterval(timer);
    begin(500);
    time++;
  }, 200);
}
