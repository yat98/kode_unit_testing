const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
  if(qty < 2) return 1;
  return parseInt(qty) - 1;
};
const recalculateSubtotal = (price, qty, discount = 0) => 
  (1 - parseFloat(discount) / 100) * parseInt(price) * parseInt(qty);

export { incrementQty, decrementQty, recalculateSubtotal };
