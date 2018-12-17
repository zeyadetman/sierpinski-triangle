var canvas = document.getElementById('chaos');
var ctx = canvas.getContext('2d');

const GenerateRand = () => Math.floor(Math.random() * 7);
const updateDot = (x, y, point) => {
  let X = Math.max(x,point.x)/2;
  let Y = Math.max(y,point.y)/2;
  return {x: X, y: Y};
}
const createDot = (obj) => {
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, 1, 0, 2 * Math.PI, false);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#fc3';
  ctx.stroke();
}

const pA = {x: canvas.width/2, y: 5};
const pB = {x: 5, y: canvas.height-5} 
const pC = {x: canvas.width-5, y: canvas.height-5}

createDot(pA);
createDot(pB);
createDot(pC);

const begin = (iterations) => {
  let x = canvas.width/4;
  let y = canvas.height/2;
    for(let i=0;i<iterations;i++) {
    createDot({x, y});
    let randN = GenerateRand();
    if(randN == 1 || randN == 2) {
      const currentDot = updateDot(x, y, pA);
      x = currentDot.x;
      y = currentDot.y;
    }
    else if(randN == 3 || randN == 4) {
      const currentDot = updateDot(x, y, pB);
      x = currentDot.x;
      y = currentDot.y;
    }
    else if(randN == 5 || randN == 6){
      const currentDot = updateDot(x, y, pC);
      x = currentDot.x;
      y = currentDot.y;
    }
  }
}

let time=0;
let timer = setInterval(() => {
   if(time >= 500) return clearInterval(timer)
   begin(500);
   time++;
}, 200);
