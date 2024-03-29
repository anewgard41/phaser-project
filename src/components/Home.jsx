import React from "react";
import Phaser from "phaser";
import GameComponent from "./GameComponent";

class Example extends Phaser.Scene {
  preload() {
    this.load.image("sky", "./assets/react.svg");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles(0, 0, "red", {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    particles.startFollow(logo);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  width: 800,
  height: 600,
  scene: Example,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

const Home = () => {
  return (
    <div>
      <GameComponent config={config} />
    </div>
  );
};

export default Home;
