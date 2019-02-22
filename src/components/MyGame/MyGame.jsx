import React from "react";
// import { DefaultPlayer as Video } from 'react-html5video';
import "./MyGame.scss";
let game = null;
export default class MyGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCancel: false
    };
  }
  render() {
    const { isShowCancel } = this.state;
    return (
      <div className={this.parseAnimationType()} id="my_game_container">
        <canvas id="game" width="800px" height="500px" />
        <i
          style={{ display: isShowCancel ? "block" : "none" }}
          onClick={() => {
            this.closeGame();
          }}
          className="cancel"
        >
          x
        </i>
      </div>
    );
  }
  componentDidMount() {}
  initGame() {
    let that = this;
    const Game = (() => {
      const cvs = document.getElementById("game");
      const ctx = cvs.getContext("2d");
      const W = cvs.width;
      const H = cvs.height;
      const F = H - 50;
      const playerX = 100;
      const playerW = 20;
      const playerH = 20;
      const getRandomInt = (m, n) =>
        Math.floor(Math.random() * (n - m + 1) + m);
      let handleRestartGame = null;
      return class Game {
        constructor() {
          this.barrierList = [];
          this.runTimer = null;
          this.keyboardTimer = null;
          this.countdownTimer = null;
          this.handleKeydown = null;
          this.handleKeyup = null;
          this.player = {
            x: playerX,
            y: F - playerH,
            w: playerW,
            h: playerH
          };
          this.curBarrier = null;
          this.dir = 0;
          this.scrollSpeed = 5;
          this.scrollDis = 0;
          this.score = 0;
          this.level = 1;
          this.isJumping = false;
          this.isGameFailed = false;
          this.skyColor = 255;
          this.pts = 0;
          this.countdownList = ["3", "2", "1", "Start!"];
          this.countdown = "";
          this.game = this;
        }
        start() {
          document.removeEventListener("keydown", handleRestartGame);
          let index = -1;
          const startGame = () => {
            index++;
            if (index > this.countdownList.length - 1) {
              clearInterval(this.countdownTimer);
              that.setState({
                isShowCancel: true
              });
              this.createBackground();
              this.drawPlayer();
              this.createBarriers();
              this.createHorizon();
              this.run();
              this.oncontrol();
              return;
            }
            this.countdown = this.countdownList[index];
            this.drawCountdown();
            this.drawRule();
          };
          startGame();
          this.countdownTimer = setInterval(startGame, 1000);
        }
        createBarriers() {
          const length = getRandomInt(1, 2);
          for (let i = 0; i < length; i++) {
            const x =
              length === 1
                ? getRandomInt(W + 75, W * 2 - 75)
                : getRandomInt(
                    (i * 0.5 + 1) * W + 75,
                    (i * 0.5 + 1.5) * W - 75
                  );
            const w = getRandomInt(30, 100);
            const h = getRandomInt(30, 100);
            const b = false;
            this.barrierList.push(this.drawBarrier(x, w, h, b));
          }
        }
        removeBarrier() {
          const firstBarrier = this.barrierList[0];
          if (firstBarrier.x + firstBarrier.w < 0) {
            this.barrierList.shift();
          }
        }
        createHorizon() {
          ctx.beginPath();
          ctx.rect(0, F, W, 50);
          ctx.fill();
        }
        createBackground() {}
        drawBarrier(x, w, h) {
          const y = F - h;
          ctx.beginPath();
          ctx.rect(x, y, w, h);
          ctx.fill();
          return { x, y, w, h };
        }
        drawPlayer() {
          const { x, y, w, h } = this.player;
          ctx.beginPath();
          ctx.rect(x, y, w, h);
          ctx.fill();
        }
        run() {
          const frame = () => {
            if (this.isGameFailed) {
              cancelAnimationFrame(this.runTimer);
              clearInterval(this.keyboardTimer);
              document.removeEventListener("keydown", this.handleKeydown);
              document.removeEventListener("keyup", this.handleKeyup);
              return;
            }
            ctx.clearRect(0, 0, W, H);
            this.createBackground();
            this.drawPlayer();
            this.createHorizon();
            this.countScrollDis();
            this.scrollBarrier();
            this.removeBarrier();
            this.oncrash();
            this.drawPts();
            requestAnimationFrame(frame);
          };
          this.runTimer = requestAnimationFrame(frame);
        }
        scrollBarrier() {
          this.barrierList.forEach(barrier => {
            barrier = {
              ...barrier,
              x: (barrier.x -= this.scrollSpeed)
            };
            this.drawBarrier(barrier.x, barrier.w, barrier.h);
          });
          if (this.scrollDis % W === 0) {
            this.createBarriers();
          }
        }
        countScrollDis() {
          this.scrollDis += this.scrollSpeed;
        }
        countPts() {
          this.barrierList.forEach(barrier => {
            if (barrier.x + barrier.w < this.player.x && !barrier.b) {
              barrier.b = true;
              this.pts++;
            }
          });
        }
        drawPts() {
          ctx.font = "24px Arial";
          ctx.fillText(`${this.pts}`, W - 50, 50, 100);
        }
        drawFailScreen() {
          ctx.font = "24px Arial";
          ctx.textAlign = "center";
          ctx.fillText(
            `Game over, your score is ${this.pts}. ${
              this.pts === 0
                ? "Are you kidding me?"
                : this.pts <= 10
                ? "Maybe you can do it better!"
                : this.pts <= 30
                ? "Quite good!"
                : "Wow, exellent!"
            }`,
            W / 2,
            250
          );
          ctx.font = "18px Arial";
          ctx.fillText("Press Enter to try it again", W / 2, 400);
        }
        drawCountdown() {
          ctx.clearRect(0, 0, W, H);
          ctx.font = "36px Arial";
          ctx.textAlign = "center";
          ctx.fillText(this.countdown, W / 2, H / 2 + 12);
        }
        drawRule() {
          ctx.font = "20px Arial";
          ctx.textAlign = "center";
          ctx.fillText(
            "Jump: W          Forward: D          Backward: A",
            W / 2,
            H - 50
          );
        }
        onrestartgame() {
          handleRestartGame = ev => {
            const keyCode = ev.keyCode;
            if (keyCode === 13) {
              game = null;
              game = new Game();
              game.start();
              that.setState({
                isShowCancel: false
              });
            }
          };
          document.addEventListener("keydown", handleRestartGame);
        }
        oncontrol() {
          const handleJump = () => {
            this.dir = 0;
            let speed = 20;
            let timer = setInterval(() => {
              this.isJumping = true;
              if (this.isGameFailed) {
                clearInterval(timer);
                this.isJumping = false;
                return;
              }
              speed--;
              this.player.y -= speed;
              if (this.player.y >= F - this.player.h) {
                this.player.y = F - this.player.h;
                clearInterval(timer);
                this.isJumping = false;
                this.countPts();
              }
            }, 19);
          };
          const handleMoveX = dir => {
            if (this.isJumping) {
              return;
            }
            this.player.x += dir * 5;
            if (this.player.x <= 0) {
              this.player.x = 0;
            } else if (this.player.x + this.player.w >= W) {
              this.player.x = W - this.player.w;
            }
          };
          this.keyboardTimer = setInterval(() => {
            if (this.dir === 0) {
              return;
            }
            if (this.isGameFailed) {
              clearInterval(this.keyboardTimer);
              this.dir = 0;
              return;
            }
            handleMoveX(this.dir);
          }, 19);
          this.handleKeydown = ev => {
            if (this.isJumping) {
              return;
            }
            const keyCode = ev.keyCode;
            if (keyCode === 87) {
              handleJump();
            }
            if (keyCode === 65) {
              this.dir = -1;
            }
            if (keyCode === 68) {
              this.dir = 1;
            }
          };
          this.handleKeyup = ev => {
            if (this.isJumping) {
              return;
            }
            const keyCode = ev.keyCode;
            if (keyCode === 65 || keyCode === 68) {
              this.dir = 0;
            }
          };
          document.addEventListener("keydown", this.handleKeydown);
          document.addEventListener("keyup", this.handleKeyup);
        }
        oncrash() {
          const { x, y, w, h } = this.player;
          this.barrierList.forEach(barrier => {
            if (
              x < barrier.x + barrier.w &&
              x + w > barrier.x &&
              y < barrier.y + barrier.h &&
              h + y > barrier.y
            ) {
              this.handleGameFail();
            }
          });
        }
        handleGameFail() {
          this.isGameFailed = true;
          ctx.clearRect(0, 0, W, H);
          this.drawFailScreen();
          this.onrestartgame();
        }
      };
    })();
    game = null;
    game = new Game();
    game.start();
  }
  parseAnimationType() {
    const { animationType } = this.props;
    switch (animationType.video) {
      case 0:
        return "";
      case 1:
        return "video_in";
      case 2:
        return "video_out";
      default:
        return "";
    }
  }
  closeGame() {
    this.setState({
      isShowCancel: false
    });
    game.handleGameFail();
    const { setAnimationType } = this.props;
    setAnimationType(2, "video");
    this.props.initGameStatus();
  }
}
