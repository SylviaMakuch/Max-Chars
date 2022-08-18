function maxChar(str) {
    const chars = {};
    let maxCount= 0;
    let maxChar = "";
    
    for(let char of str){
        chars[char] = chars[char] +1 ||1;
    }
    //this give an object 
    for (let key in chars){
      if (chars[key]  > maxCount) {
      maxCount = chars[key];
      maxChar = key;
        }
    }
    return maxChar;
  }  