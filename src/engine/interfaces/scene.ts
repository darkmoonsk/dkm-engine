import type { Application } from "pixi.js";

export interface IScene {
  load(app: Application): Promise<void> | void;
  unload(app: Application): void;
  update(app: Application, delta: number): void;
}
