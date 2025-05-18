// src/game/scenes/menu.ts

import { Application, Graphics, Text } from "pixi.js";
import type { IScene } from "../../engine/interfaces/scene";

export class MenuScene implements IScene {
  private title!: Text;
  private bg!: Graphics;

  async load(app: Application) {
    // fundo simples
    this.bg = new Graphics();
    this.bg.rect(0, 0, app.screen.width, app.screen.height).fill({
      color: "blue",
      alpha: 1,
    });
    app.stage.addChild(this.bg);

    // título
    this.title = new Text("DKM ENGINE MENU", {
      fill: 0xffffff,
      fontSize: 36,
    });
    this.title.x = app.screen.width / 2 - this.title.width / 2;
    this.title.y = 100;
    app.stage.addChild(this.title);
  }

  unload(app: Application) {
    app.stage.removeChild(this.bg, this.title);
    this.bg.destroy();
    this.title.destroy();
  }

  update(app: Application, delta: number) {
    // por enquanto nada
  }
}
