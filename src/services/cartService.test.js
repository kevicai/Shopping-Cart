import cartService from "./cartService";

const cart = [{ name: "Apple", price: 2, quantity: 1  }];

describe("test Add1Item", () =>{
    it('test with one item in cart', () => {
        expect(cartService.add1Item(0, cart)).toEqual([{ name: "Apple", price: 2, quantity: 2  }]);
    });

});


describe("test del1Item", () =>{
    it('test with multi item in cart', () => {
        expect(cartService.del1Item(0, cart)).toEqual([{ name: "Apple", price: 2, quantity: 1  }]);
    });
    
    it('test with 1 item in cart', () => {
        expect(cartService.del1Item(0, cart)).toEqual([]);
    });

});


const cart_t = [
    { name: "Apple", price: 0.2, quantity: 2 },
    { name: "Banana", price: 0.1, quantity: 2 },
  ];


describe("getTotal", () =>{
    it('test with muli types item in cart', () => {
        expect(cartService.getTotal(cart_t)).toEqual("0.60");
    });
    
    it('test with 0 item in cart', () => {
        expect(cartService.getTotal(cart)).toEqual("0.00");
    });

});


describe("getTax", () =>{
    
    it('test with price greater than 0', () => {
        expect(cartService.getTax(0.60)).toEqual("0.08");
    });
    
    it('test with price equal 0', () => {
        expect(cartService.getTax(0.00)).toEqual("0.00");
    });

});

describe("getTotalPlusTax", () =>{
    
    it('test with price greater than 0', () => {
        expect(cartService.getTotalPlusTax(0.60)).toEqual("0.68");
    });
    
    it('test with price equal 0', () => {
        expect(cartService.getTotalPlusTax(0.00)).toEqual("0.00");
    });

});