export const formatOptions = (extras, size) => {
    const parts = [`Size: ${size}`];

    if (extras.length > 0) {
        parts.push(extras.join(', '))
    }

    return parts.join(' • ')
}

export const calculateTotalPrice = (basePrice, size, extras, quantity) => {

    const total = calculateUnitPrice(basePrice, size, extras) * quantity;

    return total;
}

export const calculateUnitPrice = (basePrice, size, extras) => {
    const sizeMultiplier = size === 'M'
        ? 1.2
        : size === 'L'
            ? 1.5
            : 1;

    const extrasPrice = extras.length * 0.50

    return basePrice * sizeMultiplier + extrasPrice;
}

export const AVAILABLE_EXTRAS = [
    'Extra cheese',
    'Spicy sauce',
    'Bacon',
    'Avocado',
    'Jalapeños',
];
