export const walls = [
  // Row 0
  [
    // Column 0
    [
      { x: 500, y: 0, width: 40, height: 1000 },
      { x: 1500, y: 0, width: 40, height: 1000 },
      { x:500, y:900, width:400, height:40},
      { x:1100, y:900, width:400, height:40}
    ],

    // Column 1
    [
      { x: 200, y: 100, width: 400, height: 40 },
      { x: 560, y: 140, width: 40, height: 160 },
      { x: 200, y: 300, width: 400, height: 40 },
      { x: 200, y: 340, width: 40, height: 160 },
      { x: 200, y: 500, width: 400, height: 40 }
    ]
  ],

  // Row 1
  [
    // Column 0
    [
      { x: 200, y: 100, width: 400, height: 40 },
      { x: 200, y: 300, width: 400, height: 40 },
      { x: 200, y: 500, width: 400, height: 40 },
      { x: 560, y: 140, width: 40, height: 360 }
    ],

    // Column 1
    [
      { x: 200, y: 100, width: 40, height: 240 },
      { x: 200, y: 300, width: 400, height: 40 },
      { x: 560, y: 100, width: 40, height: 440 }
    ]
  ]
];

const wallImages = [];

export function loadWalls(row, column){
    for (let y = 0; y < row; y++){
        wallImages[y] = [];
        for(let x = 0; x < column; x++) {
            const img = new Image();
            img.src = `./assets/walls${y}${x}.png`
            wallImages[y][x] = img;
        }
    }
}

export {wallImages}
