import React from 'react';

/**
 * Create and render a randomised star field
 */
class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas(this.refs.canvas.getContext('2d'), 800);
  }

  random(min, max) {
    return Math.round(Math.random() * max - min + min);
  }

  updateCanvas(context, starCount) {
    const COLOURS = ['#ffffff', '#f7f0ee', '#83bfc5'];
    const HEIGHT = context.canvas.clientHeight;
    const WIDTH = context.canvas.clientWidth;

    let x;
    let y;
    let brightness;
    let radius;

    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;
    context.fillStyle = '#000';
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.save();

    for (let i = 0; i < starCount; i++) {
      x = Math.random() * WIDTH;
      y = Math.random() * HEIGHT;
      radius = Math.random() * 1.1;
      brightness = this.random(80, 100) / 100;

      context.beginPath();
      context.globalAlpha = brightness;
      context.fillStyle = COLOURS[this.random(0, COLOURS.length)];
      context.arc(x, y, radius, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }

    context.restore();
  }

  render() {
    return <canvas className="stars" ref="canvas" />;
  }
}

export default Canvas;
