const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    currencySign: 'accounting',
    localeMatcher: 'best fit',
});

export function formatPrice(price) {
    return formatter.format(price)
}