// 点类
function Point(x, y, w, h) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.r = 1 + Math.random() * 2;
  this.sx = Math.random() * 2 - 1;
  this.sy  = Math.random() * 2 - 1;
}

// 画点方法
Point.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = '#aaa';
  ctx.fill();
}

Point.prototype.move = function() {
  this.x += this.sx;
  this.y += this.sy;
  if (this.x > this.w || this.x < 0) this.sx = -this.sx;
  if (this.y > this.h || this.y < 0) this.sy = -this.sy;
}

Point.prototype.drawLine = function(ctx, p) {
  const dx = this.x - p.x;
  const dy = this.y - p.y;
  const d = Math.sqrt(dx * dx, dy * dy);
  if (d < 100) {
    const alpha = (100 - d) / 100 * 1;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(p.x, p.y);
    ctx.closePath();
    ctx.strokeStyle = 'rgba(170, 170, 170, ' + alpha + ')';
    ctx.strokeWidth = 1;
    ctx.stroke();
  }
}

class BackCanvas {
  // const canvas = document.getElementById(id);
  // const ctx = canvas.getContext('2d');
  // canvas.width = w;
  // canvas.height = h;
  // const points = [];
  // for (let i = 0; i <= 400; i++) {
  //   points.push(new Point(Math.random() * w, Math.random() * h, w, h));
  // }
  constructor(id, w, h) {
    const canvas = document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.w = w;
    this.h = h;
    canvas.width = w;
    canvas.h = h;
    this.points = [];
    for (let i = 0; i <= 400; i++) {
      this.points.push(new Point(Math.random() * w, Math.random() * h, w, h));
    }
  }

  paint() {
    this.ctx.clearRect(0, 0, this.w, this.h); //清空画布
    for(let i = 0; i < this.points.length; i++) {
      this.points[i].move();
      this.points[i].draw(this.ctx);
      for(let j = i + 1; j < this.points.length; j++) {
        this.points[i].drawLine(this.ctx, this.points[j]);
      }
    }
  }

  loop() {
    requestAnimationFrame(this.loop);
    this.paint();
  }
}

export { BackCanvas }
