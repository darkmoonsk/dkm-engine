import {
  Application,
  Assets,
  Container,
  Loader,
  Rectangle,
  Sprite,
  Texture,
} from "pixi.js";
import { IScene } from "../../engine/interfaces/scene";
import { IWorldMapData } from "../../engine/types/WorldMapData";
import { TiledMap } from "../../engine/types/TiledMap";

export class WorldScene implements IScene {
  private mapData: IWorldMapData;
  private container!: Container;
  private tiles: Sprite[] = [];

  constructor(mapData: IWorldMapData) {
    this.mapData = mapData;
  }
  async load(app: Application) {
    const tilesetTexture = await Assets.load(this.mapData.tilesetUrl);
    const mapJson = await Assets.load<TiledMap>(this.mapData.mapJsonUrl);

    this.container = new Container();

    app.stage.addChild(this.container);

    const cols = tilesetTexture.width / this.mapData.tileSize;
    const data = mapJson.layers[0].data as number[];

    for (let y = 0; y < this.mapData.height; y++) {
      for (let x = 0; x < this.mapData.width; x++) {
        const gid = data[y * this.mapData.width + x];
        if (gid === 0) continue;

        const tileIndex = gid - 1;
        const sx = (tileIndex % cols) * this.mapData.tileSize;
        const sy = Math.floor(tileIndex / cols) * this.mapData.tileSize;

        const frame = new Rectangle(
          sx,
          sy,
          this.mapData.tileSize,
          this.mapData.tileSize
        );

        const texture = new Texture({
          source: tilesetTexture.baseTexture,
          frame,
        });

        const tileSprite = new Sprite(texture);
        tileSprite.x = x * this.mapData.tileSize;
        tileSprite.y = y * this.mapData.tileSize;

        this.container.addChild(tileSprite);
        this.tiles.push(tileSprite);
      }
    }
  }
  unload(): void {
    this.tiles.forEach((t) => t.destroy());
    this.container.destroy({ children: true });
    this.tiles = [];
  }
  update(app: Application, delta: number): void {}
}
