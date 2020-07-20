function createData(id, coin, holding, value, price) {
    return { id, coin, holding, value, price };
}

const rows2 = [
    createData(4, 'BITCOIN', 3.00256, 2.5268, 4.2856),
    createData(5, 'ETHEREUM', 2.00256, 1.5268, 0.2856),
    createData(6, 'BINANCE', 0.20256, 0.8268, 0.7856),
    createData(7, 'ETHEREUM', 0.60256, 0.5268, 0.9856)
];

export default rows2;