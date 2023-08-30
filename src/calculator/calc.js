const add = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isNaN(parseFloat(a)) && Number.isFinite(a)) && (Number.isNaN(parseFloat(b)) && Number.isFinite(b))) return parseInt(a) + parseInt(b) ;
  return parseFloat(Number(parseFloat(a) + parseFloat(b)).toFixed(2));
};

const sub = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isNaN(parseFloat(a)) && Number.isFinite(a)) && (Number.isNaN(parseFloat(b)) && Number.isFinite(b))) return parseInt(a) - parseInt(b) ;
  return parseFloat(Number(parseFloat(a) - parseFloat(b)).toFixed(2));
};

const mul = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isNaN(parseFloat(a)) && Number.isFinite(a)) && (Number.isNaN(parseFloat(b)) && Number.isFinite(b))) return parseInt(a) * parseInt(b) ;
  return parseFloat(Number(parseFloat(a) * parseFloat(b)).toFixed(2));
};

const div = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isNaN(parseFloat(a)) && Number.isFinite(a)) && (Number.isNaN(parseFloat(b)) && Number.isFinite(b))) return parseInt(a) / parseInt(b) ;
  return parseFloat(Number(parseFloat(a) / parseFloat(b)).toFixed(2));
};

const print = (text) => console.log(text);

export default{
  add, sub, mul ,div, print
};