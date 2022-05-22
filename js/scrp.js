var x = 20;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var vcanv = document.getElementById("vett");

var ctxv = vcanv.getContext("2d");

ctxv.translate(300, 300);
ctxv.strokeStyle = "red";

function sta() {
  ctx.translate(300, 300);
  ctx.beginPath();
  ctx.moveTo(-300, 0);
  ctx.lineTo(300, 0);
  ctx.stroke();
  ctx.moveTo(0, 300);
  ctx.lineTo(0, -300);
  ctx.stroke();
  while (x < 300) {
    ctx.fillRect(x, -2, 2, 4);
    ctx.fillRect(-x, -2, 2, 4);
    ctx.fillRect(-2, x, 4, 2);
    ctx.fillRect(-2, -x, 4, 2);
    x += 20;
  }
}

function drawVect() {
  var i =
    20 *
    (document.getElementById("i").value *
      document.getElementById("matx").value +
      document.getElementById("j").value *
        document.getElementById("matx1").value);
  var j =
    20 *
    (document.getElementById("j").value *
      document.getElementById("maty1").value +
      document.getElementById("i").value *
        document.getElementById("maty").value);

  ctxv.beginPath();
  ctxv.moveTo(0, 0);
  ctxv.lineTo(i, -j);
  ctxv.stroke();
}

function erase() {
  ctxv.clearRect(0, 0, 300, -300);
  ctxv.clearRect(0, 0, 300, 300);
  ctxv.clearRect(0, 0, -300, -300);
  ctxv.clearRect(0, 0, -300, 300);
}

function sum() {
  var i =
    20 *
      (document.getElementById("i").value *
        document.getElementById("matx").value +
        document.getElementById("j").value *
          document.getElementById("matx1").value) +
    20 *
      (document.getElementById("k").value *
        document.getElementById("matx").value +
        document.getElementById("l").value *
          document.getElementById("matx1").value);
  var j =
    20 *
      (document.getElementById("j").value *
        document.getElementById("maty1").value +
        document.getElementById("i").value *
          document.getElementById("maty").value) +
    20 *
      (document.getElementById("l").value *
        document.getElementById("maty1").value +
        document.getElementById("k").value *
          document.getElementById("maty").value);

  ctxv.beginPath();
  ctxv.moveTo(0, 0);
  ctxv.lineTo(i, -j);
  ctxv.stroke();
}

function prod() {
  var k = document.getElementById("pr").value;
  var i =
    20 *
    (document.getElementById("i").value *
      document.getElementById("matx").value +
      document.getElementById("j").value *
        document.getElementById("matx1").value) *
    k;
  var j =
    20 *
    (document.getElementById("j").value *
      document.getElementById("maty1").value +
      document.getElementById("i").value *
        document.getElementById("maty").value) *
    k;

  ctxv.beginPath();
  ctxv.moveTo(0, 0);
  ctxv.lineTo(i, -j);
  ctxv.stroke();
}

function matrix() {
  var i = 20;
  var x1 = document.getElementById("matx").value;
  var y1 = document.getElementById("maty").value;
  var x2 = document.getElementById("matx1").value;
  var y2 = document.getElementById("maty1").value;

  ctx.clearRect(0, 0, 300, -300);
  ctx.clearRect(0, 0, 300, 300);
  ctx.clearRect(0, 0, -300, -300);
  ctx.clearRect(0, 0, -300, 300);

  ctx.beginPath();
  ctx.moveTo(-300 * x1, -300 * -y1);
  ctx.lineTo(300 * x1, 300 * -y1);
  ctx.moveTo(-300 * x2, -300 * -y2);
  ctx.lineTo(300 * x2, 300 * -y2);
  ctx.stroke();

  while (i < 900) {
    ctx.fillRect(
      Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) *
        i *
        Math.cos(Math.atan(y1 / x1)),
      Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) *
        -i *
        Math.sin(Math.atan(y1 / x1)),
      2,
      4
    );
    ctx.fillRect(
      Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) *
        -i *
        Math.cos(Math.atan(y1 / x1)),
      Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) *
        i *
        Math.sin(Math.atan(y1 / x1)),
      2,
      4
    );
    ctx.fillRect(
      Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) *
        i *
        Math.cos(Math.atan(y2 / x2)),
      Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) *
        -i *
        Math.sin(Math.atan(y2 / x2)),
      4,
      2
    );
    ctx.fillRect(
      Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) *
        -i *
        Math.cos(Math.atan(y2 / x2)),
      Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) *
        i *
        Math.sin(Math.atan(y2 / x2)),
      4,
      2
    );
    i += 20;
  }
}
