module.exports = function check(str, bracketsConfig) {
  let pair = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  console.log(pair)
  let check = [];
  for (let i = 0; i < str.length; i++) {
      let current = str[i];
      console.log(current, check)
      if (pair[current] !== undefined) {
        if (current !== pair[current] || check[check.length - 1] !== current) {
          check.push(current);
        } else {
          check.pop();
        }
      } else {
        if (Object.values(pair).indexOf(current) !== -1) {
          console.log(check)
          console.log(Object.values(pair).indexOf(current), Object.keys(pair)[Object.values(pair).indexOf(current)], pair[Object.keys(pair)[Object.values(pair).indexOf(current)]])
          if (check[check.length - 1] === Object.keys(pair)[Object.values(pair).indexOf(current)]) {
            check.pop()
          } else {return false}
        } else {return false}
      }
  }
  return check.length === 0
}


