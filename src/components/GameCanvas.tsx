import { useEffect, useRef } from "react";
import { Application, Assets, Sprite } from "pixi.js";
import "./styles/reset.css";
import { SceneManager } from "../engine/sceneManager";
import { MenuScene } from "../game/scenes/menu";

export function GameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const init = async () => {
    const app = new Application();
    await app.init({
      background: 0x1e1e1e,
      resizeTo: window,
    });

    containerRef.current?.appendChild(app.canvas);

    const texture = await Assets.load("src/assets/player.png");
    const sprite = new Sprite(texture);

    sprite.height = 100;
    sprite.width = 100;
    sprite.x = 100;
    sprite.y = 100;
    app.stage.addChild(sprite);

    const sceneManager = new SceneManager(app);
    sceneManager.registerScene("menu", new MenuScene());

    await sceneManager.changeScene("menu");

    return () => {
      app.destroy(true);
    };
  };

  useEffect(() => {
    init();
  }, []);

  return <div ref={containerRef} />;
}
