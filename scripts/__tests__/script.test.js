const getAkanName = require('./../script');

test('Male akan name is returned correctly', () => {
    expect(getAkanName("Male", "29/07/2024")).toBe("Kwadwo"); // monday
    expect(getAkanName("Male", "30/07/2024")).toBe("Kwabena");
    expect(getAkanName("Male", "31/07/2024")).toBe("Kwaku");
    expect(getAkanName("Male", "31/12/2009")).toBe("Yaw");
    expect(getAkanName("Male", "01/01/2010")).toBe("Kofi");
    expect(getAkanName("Male", "01/04/1995")).toBe("Kwame");
    expect(getAkanName("Male", "25/10/2015")).toBe("Kwasi"); // sunday
});

test('Female akan name is returned correctly', () => {
    const akanName = getAkanName("Female", "09/01/1960");
    expect(akanName).toBe("Ama");
});