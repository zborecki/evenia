export const getFees = (price: number, vat: number) => (price * vat).toFixed(2);
