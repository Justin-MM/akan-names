const getAkanName = require('./../script');

test('male akan name is returned correctly', () => {
    const akanName = getAkanName("male", "30/07/2024");
    expect(akanName).toBe("Kwabena");
});

test('female akan name is returned correctly', () => {
    const akanName = getAkanName("female", "09/01/1960");
    expect(akanName).toBe("Ama");
});