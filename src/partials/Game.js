import {
  SVG_NS,
  KEYS
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Message from './Message';

export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(element);

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;

    this.board = new Board(this.width, this.height);

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2, //this sets the y
      KEYS.a,
      KEYS.z,
      KEYS.r,

    );
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - (this.paddleWidth + this.boardGap),
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down,
    );

    this.radiusBall = 8;

    this.ball1 = new Ball(this.radiusBall, this.width, this.height);
    this.ball2 = new Ball(this.radiusBall / 2, this.width, this.height)

    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);

    this.winner = new Message(85, 140, 40);

    document.addEventListener('keydown', event => {
      if (event.key === KEYS.spaceBar) {
        this.pause = !this.pause;
      }

    });
  }

  render() {
    // Pause game:
    if (this.pause) {
      return;
    }

    // Empty out game element before re-rendering:
    this.gameElement.innerHTML = '';

    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    svg.setAttributeNS(null, 'version', '1.1');

    this.gameElement.appendChild(svg);

    // Rendering all game elements inside the SVG:
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball1.render(svg, this.player1, this.player2);
    this.ball2.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);

    const player1Message = "Player 1 Wins!";
    const player2Message = "Player 2 Wins!";

    if (this.player1.score === 12) {
      this.winner.render(svg, player1Message);
      this.reset();

    } else if (this.player2.score === 12) {
      this.winner.render(svg, player2Message);
      this.reset();
    }
  }
}