function spiceMustFlow(yield) {
    let totalYield = 0;
    let days = 0;
    if (yield >= 100) {
      while (yield >= 100) {
        totalYield += yield;
        yield -= 10;
        totalYield -= 26;
        days++;
      }
  
      totalYield -= 26;
    }
    console.log(days);
    console.log(totalYield);
  }