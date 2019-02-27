const functions = require('./errors');

describe('Empty List', () => {
    test('Returns empty list', () => {
        expect(functions.emptyList()).toEqual([]);
    });
    test('Returns list with length.0', () => {
        expect(functions.emptyList()).toHaveLength(0);
    });
    test('Returns no empty string', () => {
        expect(functions.emptyList()).not.toEqual('');
    });
});

describe('Total Product Cost', () => {
    test('Returns 0 on empty list', () => {
        expect(functions.totalProductCost([])).toEqual(0);
    });
    test('Returns 15 on a list with item that costs 15', () => {
        expect(functions.totalProductCost([{ price: 15 }])).toEqual(15);
    });
    test('Return 55 on list with 3 items costing, 10,15,30', () => {
        expect(functions.totalProductCost([{ price: 10 }, { price: 15 }, { price: 30 }])).toEqual(55);
    });
});

describe('Add Product', () => {
    test('Add product to empty list, is length 1 and content is correct', () => {
        const products = [];
        const product = { name: "Lök", price: 15 };
        const oneproduct = [...products, product];
        expect(functions.addProduct(products, product)).toEqual(oneproduct);
        expect(functions.addProduct(products, product)).toHaveLength(1);
    });
    test('Add product to list with 2 items, is length 3 and is content correct', () => {
        const products = [{ name: "Banan", price: 10 }, { name: "Mango", price: 45 }];
        const product = { name: "Lök", price: 15 };
        const threeproducts = [...products, product];
        expect(functions.addProduct(products, product)).toEqual(threeproducts);
        expect(functions.addProduct(products, product)).toHaveLength(3);
    });
});

describe("Function removeProduct", () => {
    let boll, spade, sten;
    let threeProducts, oneProduct;
    let firstElementIndex;
    beforeEach(() => {
        boll = { name: "Boll", price: 50 };
        spade = { name: "Spade", price: 100 };
        sten = { name: "Sten", price: 1 };
        threeProducts = [boll, spade, sten];
        oneProduct = [boll];
        firstElementIndex = 0;
    });

    test("is implemented", () => {
        expect(functions.removeProduct).toBeDefined();
    });
    test("Returns empty list when removing product in a list with 1 product", () => {
        const products = [{ name: 'apple', price: 15 }];
        expect(functions.removeProduct(oneProduct, firstElementIndex)).toEqual([]);
    });
    test("contains 2 items when removing first product in list with 3 items", () => {
        expect(functions.removeProduct(threeProducts, firstElementIndex)).toHaveLength(2);
    });
    test("removes 'Boll', contain 'Sten' and 'Spade'", () => {
        expect(functions.removeProduct(threeProducts, firstElementIndex)).toContainEqual(sten);
        expect(functions.removeProduct(threeProducts, firstElementIndex)).toContainEqual(spade);
    });
    describe('Function expensive cheap product', () => {
        test('is implemented', () => {
            expect(functions.expensiveCheapProduct).toBeDefined();
        });
    });
});

