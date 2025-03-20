const { expect } = require('chai');
const { validateEmail, validatePassword, validatePhoneNumber } = require('../src/basic-functions.js');


it('should return true for a valid email', () => {
    const validEmail = 'test@email.com';
    const result = validateEmail(validEmail);
    expect(result).to.be.true;
});

it('should return true for password 8 characters or greater', () => {
    const validPassword = 'abcd1234';
    const result = validatePassword(validPassword);
    expect(result).to.be.true;
});


describe('Test for: validatePhoneNumber function', () => {
    // test case 1 
    it("should return true for a valid phone number", () => {
        const validPhoneNumber = "1234567890";
        const result = validatePhoneNumber(validPhoneNumber);
        expect(result).to.be.true;
    });
    // test case 2 
    it("should return false for a phone number with a length other than 10 digits", () => {
        const invalidPhoneNumber = "123456789";
        const result = validatePhoneNumber(invalidPhoneNumber);
        expect(result).to.be.false;
    });
    // test case 3
    it("should return false for a phone number with non-digit characters", () => {
        const invalidPhoneNumber = "123abc4567";
        const result = validatePhoneNumber(invalidPhoneNumber);
        expect(result).to.be.false;
    }); 
})