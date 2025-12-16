import { player, move } from "./player.js";
import { keys } from "./input.js";
import { maps } from "./walls.js";
import { buildWalls, tileSize } from "./tiles.js";

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.tileSize = tileSize;
    this.roomX = 0;
    this.roomY = 0;

    this.loadRoom();
  }

  wallImage = document.getElementById("wallImage");
  whiteFloor = document.getElementById("whiteFloor");
  blueFloor = document.getElementById("blueFloor");
  hallPass = document.getElementById("hallPass");
  characterGreen = document.getElementById("characterGreen");
  corner1 = document.getElementById("corner1");
  corner2 = document.getElementById("corner2");
  wallCorner1 = document.getElementById("wallCorner1");
  wallCorner2 = document.getElementById("wallCorner2");

  loadRoom() {
    this.currentMap = maps[this.roomY][this.roomX];
    this.walls = buildWalls(this.currentMap);
    this.worldWidth = this.currentMap[0].length * this.tileSize;
    this.worldHeight = this.currentMap.length * this.tileSize;
  }

  update() {
let dx = 0;
let dy = 0;

if (keys.has("ArrowUp") || keys.has("w")){ 
    dy -= 1;
}
if (keys.has("ArrowDown") || keys.has("s")){ 
    dy += 1;
}
if (keys.has("ArrowLeft") || keys.has("a")){ 
    dx -= 1;
}
if (keys.has("ArrowRight") || keys.has("d")){ 
    dx += 1;
}

if (dx !== 0 || dy !== 0) {
  const length = Math.hypot(dx, dy);
  dx = (dx / length) * player.speed;
  dy = (dy / length) * player.speed;
}

move(dx, dy, this.walls);

    if (player.x >= this.worldWidth - player.width && this.roomX < maps[this.roomY].length - 1) {
      this.roomX++;
      this.loadRoom();
      player.x = 0;
      return;
    }

    if (player.x <= 0 && this.roomX > 0) {
      this.roomX--;
      this.loadRoom();
      player.x = this.worldWidth - player.width;
      return;
    }

    if (player.y <= 0 && this.roomY > 0) {
      this.roomY--;
      this.loadRoom();
      player.y = this.worldHeight - player.height;
      return;
    }

    if (
      player.y >= this.worldHeight - player.height &&
      this.roomY < maps.length - 1
    ) {
      this.roomY++;
      this.loadRoom();
      player.y = 0;
      return;
    }

    player.x = Math.max(0, Math.min(player.x, this.worldWidth - player.width));
    player.y = Math.max(0, Math.min(player.y, this.worldHeight - player.height));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.worldWidth, this.worldHeight);
     for (const wall of this.walls) {
     const img = document.getElementById(wall.id);
     if(wall.width > 0){
        this.ctx.drawImage(img, wall.x, wall.y, wall.width, wall.height);
     }else{
        this.ctx.drawImage(img, wall.x, wall.y, 32, 32);
     }
   }
    this.ctx.drawImage(characterGreen, player.x, player.y);
  }

  run = () => {
    this.update();
    this.draw();
    requestAnimationFrame(this.run);
  };

  start() {
    requestAnimationFrame(this.run);
  }
}
