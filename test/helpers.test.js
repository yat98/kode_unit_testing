import {incrementQty,decrementQty,recalculateSubtotal} from '../src/cart/helpers.js';

describe('incrementQty Function', () => {
  it('should add 1', () => {
    expect(incrementQty(1)).toBe(2);
  });

  it('should add number, not string', () => {
    expect(incrementQty("1")).toBe(2);
  });
});

describe('decrementQty Function', () => {
  it('should minus 1', () => {
    expect(decrementQty(2)).toBe(1);
  });

  it('should substract number, not string', () => {
    expect(decrementQty("2")).toBe(1);
  });

  it('should substract number from 1 is 1', () => {
    expect(decrementQty(1)).toBe(1);
  });
});

describe('recalculateSubtotal Function', () => {
  it('should recalculate subtotal', () => {
    expect(recalculateSubtotal(25000,3)).toBe(75000);
  });

  it('should recalculate subtotal with discount', () => {
    expect(recalculateSubtotal(25000,3,27)).toBe(54750);
  });
});