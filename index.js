'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(mnumbers){
  let mresult = 1;
  for(let mnum of mnumbers){
    mresult = mresult * mnum
  }
  return mresult;
}
module.exports = { add, multi };
