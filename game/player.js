import { collision } from "./collision.js";

export const player = {
  x: 64,
  y: 64,
  width: 32,
  height: 32,
  speed: 4
};

export function move(dx, dy, walls) {
  player.x += dx;
  for (const wall of walls) {
    if (collision(player, wall)) {
      player.x -= dx;
      break;
    }
  }

  player.y += dy;
  for (const wall of walls) {
    if (collision(player, wall)) {
      player.y -= dy;
      break;
    }
  }
}
