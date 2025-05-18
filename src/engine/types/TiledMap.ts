import { TiledLayer } from "./TiledLayer";

export interface TiledMap {
  width: number;
  height: number;
  tileWidth: number;
  tileHeight: number;
  layers: TiledLayer[];
  // tilesets?: TiledTileset[];
}
