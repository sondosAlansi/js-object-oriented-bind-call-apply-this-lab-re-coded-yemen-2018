//Your code here
function justInvoke(fn){
  
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  
  return setThisWithCall.call(fn,thisValue,arg);
}