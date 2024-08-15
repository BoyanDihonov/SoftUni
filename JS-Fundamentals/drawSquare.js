function drawSquare(size) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        console.log("*");
      }
      console.log("\n");
    }
  }

  drawSquare(5)