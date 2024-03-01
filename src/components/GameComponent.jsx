
import React from "react";
import Phaser from "phaser";
import { useEffect } from "react";

const GameComponent = ({config}) => {
    useEffect (() => {
        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        }
    }, [])  

  return (
    <div id="phaser-container"></div>
  );
}

export default GameComponent;