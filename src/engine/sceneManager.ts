import type { Application, Ticker } from "pixi.js";
import type { IScene } from "./interfaces/scene";

export class SceneManager {
  private app: Application;
  private scenes = new Map<string, IScene>();
  private currentScene?: IScene;
  private updateWrapper?: (ticker: Ticker) => void;

  constructor(app: Application) {
    this.app = app;
  }

  public registerScene(key: string, scene: IScene) {
    this.scenes.set(key, scene);
  }

  public async changeScene(key: string) {
    const next = this.scenes.get(key);
    if (!next) {
      throw new Error(`Scene not found: ${key}`);
    }

    this.updateWrapper = (ticker: Ticker) => {
      if (this.currentScene) {
        this.currentScene.update(this.app, ticker.deltaTime);
      }
    };

    if (this.currentScene) {
      this.currentScene.unload(this.app);
      if (this.updateWrapper) {
        this.app.ticker.remove(this.updateWrapper);
      }
    }

    await next.load(this.app);
    this.currentScene = next;

    this.app.ticker.add(this.updateWrapper);
  }
}
