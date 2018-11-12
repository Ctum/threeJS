export default class Danmu {
  constructor(canvas, options = {}) {
    if (!canvas) return;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    let defaultOptions = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: {

      }
    };
    Object.assign(this, defaultOptions, options);
    this.isPaused = true;
    this.barrages = this.data.map(item => new Barrage(item, this));
    this.render();
  }

  render() {
    this.clear();
    this.renderBarrage();
    if (!this.isPaused) {
      // 记得再看下
      requestAnimationFrame(this.render.bind(this));
    }
  }

  clear() {
    this.ctx.clearPath(0, 0, this.canvas.width, this.canvas.height);
  }

  renderBarrage() {
    // todo
  }
}

class Barrage {
  constructor(obj, ctx) {
    // todo
    this.value = obj.value;
    this.time = obj.time;
    this.obj = obj;
    this.ctx = ctx;
  }
}