//Your code here
function justInvoke(fn){
  
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  
  return call(fn,thisValue,arg);
}