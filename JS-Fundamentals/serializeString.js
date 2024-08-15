function serializeString(input) {
    let str = input.shift();
    let result = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (result[char]) {
        result[char].push(i);
      } else {
        result[char] = [i];
      }
    }
  
    let serializedString = '';
    for (let char in result) {
      serializedString += `${char}:${result[char].join('/')}`;
      serializedString += '\n';
    }
  
    console.log(serializedString);
  }
  
  serializeString(["abababa"]);
  