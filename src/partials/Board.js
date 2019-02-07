import {
  SVG_NS
} from '../settings';

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render() {
    let rect = document.createElementNS(SVG_NS, 'rect');
    //setting all the rect attributes 
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', '#353535');
    rect.setAttributeNS(null, 'stroke', '#353535');

    let line = document.createElementNS(SVG_NS, 'line');
    //setting all dotted line attributes 
    line.setAttributeNS(null, 'x1', this.width / 2);
    line.setAttributeNS(null, 'y1', '0');
    line.setAttributeNS(null, 'x2', this.width / 2);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', 'white');
    line.setAttributeNS(null, 'stroke-dasharray', '20, 15');
    line.setAttributeNS(null, 'stroke-width', '4');
  }
}