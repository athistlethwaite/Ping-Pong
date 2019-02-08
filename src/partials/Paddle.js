import {
  SVG_NS
} from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 40;
    this.score = 0;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case upKey:
          this.up()
          break;
        case downKey:
          this.down()
          break;
      }
    });
  }

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    //setting all the rect attributes for the paddle  
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x); // x of the top left corner 
    rect.setAttributeNS(null, 'y', this.y); //
    rect.setAttributeNS(null, 'fill', 'white');

    //append to the parent SVG
    svg.appendChild(rect);

  }
  //   rect id = "paddleLeft"

  // x = "10"
  // y = "100"

  // x = "494"
  // y = "100"
  // fill = "#FFFFFF" / >

}