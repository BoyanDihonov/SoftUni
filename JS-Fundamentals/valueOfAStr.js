function valueOfAStr(inputString, letterCase) {
    let sum = 0;
  
    // Convert inputString to string to handle different input types
    inputString = String(inputString);
  
    for (let i = 0; i < inputString.length; i++) {
      let currentChar = inputString.charAt(i);
  
      if (
        (letterCase === "UPPERCASE" && currentChar >= 65 && currentChar <= 90) ||
        (letterCase === "LOWERCASE" && currentChar >= 97 && currentChar <= 122)
      ) {
        sum += currentChar.charCodeAt(0);
      }
    }
  
    console.log("The total sum is: " + sum);
  }

  valueOfAStr(['HelloFromMyAwesomePROGRAM',
  'LOWERCASE'])