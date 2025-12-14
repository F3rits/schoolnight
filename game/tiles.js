export const tileSize = 32;

export function buildWalls(map) {
  const walls = [];

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === "#") {
        walls.push({
          x: x * tileSize,
          y: y * tileSize,
          width: tileSize,
          height: tileSize
        });
      }
    }
  }

  return walls;
}
