import {
  SVG_NS
} from '../settings.js';

export default class Message {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg, message) {
    let winner = document.createElementNS(SVG_NS, 'text');
    winner.setAttributeNS(null, 'x', this.x);
    winner.setAttributeNS(null, 'y', this.y);
    winner.setAttributeNS(null, 'font-size', this.size);
    winner.setAttributeNS(null, 'font-family', 'Silkscreen Web, monospace');
    winner.setAttributeNS(null, 'fill', '#FFFFFF');
    winner.innerHTML = message;

    svg.appendChild(winner);
  }
}