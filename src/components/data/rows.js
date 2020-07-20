function createData(id, coin, holding, value, price) {
    return { id, coin, holding, value, price };
}

const rows = [
    createData(1, 'BITCOIN', 0.30256, 0.7268, 12.2856),
    createData(2, 'ETHEREUM', 1.00256, 1.9268, 2.2856),
    createData(3, 'BINANCE', 0.80256, 0.6268, 3.2856),
    createData(4, 'BITCOIN', 3.00256, 2.5268, 4.2856),
    createData(5, 'ETHEREUM', 2.00256, 1.5268, 0.2856),
    createData(6, 'BINANCE', 0.20256, 0.8268, 0.7856),
    createData(7, 'ETHEREUM', 0.60256, 0.5268, 0.9856)
];

export default rows;