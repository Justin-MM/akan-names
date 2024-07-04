/**
 * @jest-environment jsdom
 */
const getAkanName = require('./../script');

test('Male akan name is returned correctly', () => {
    expect(getAkanName("Male", "2024-07-29")[1]).toBe("Kwadwo"); // monday
    expect(getAkanName("Male", "2024-07-30")[1]).toBe("Kwabena");
    expect(getAkanName("Male", "2024-07-31")[1]).toBe("Kwaku");
    expect(getAkanName("Male", "2009-12-31")[1]).toBe("Yaw");
    expect(getAkanName("Male", "2010-01-01")[1]).toBe("Kofi");
    expect(getAkanName("Male", "1995-04-01")[1]).toBe("Kwame");
    expect(getAkanName("Male", "2015-10-25")[1]).toBe("Kwasi"); // sunday
});

test('Female akan name is returned correctly', () => {
    expect(getAkanName("Female", "1999-03-01")[1]).toBe("Adwoa"); // monday
    expect(getAkanName("Female", "2000-02-29")[1]).toBe("Abenaa");
    expect(getAkanName("Female", "2000-03-01")[1]).toBe("Akua");
    expect(getAkanName("Female", "2024-07-18")[1]).toBe("Yaa");
    expect(getAkanName("Female", "1999-12-31")[1]).toBe("Afua");
    expect(getAkanName("Female", "2000-01-01")[1]).toBe("Ama");
    expect(getAkanName("Female", "2000-01-02")[1]).toBe("Akosua"); // sunday
});