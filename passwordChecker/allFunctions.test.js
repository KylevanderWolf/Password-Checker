
const functions = require("./allFunctions.js");

//Test 1
test("password length less than 9 ", () => {
    let condition = true
    let password = "pass"
    let input = functions.hasRightLength(password)
    expect(input).toBe(condition);
});

//Test 2 
test("password is not equal to null or empty string ", () => {
    let condition = true
    let password = "pass"
    let input = functions.isNotNull(password)
    expect(input).toBe(condition);
});

//Test 3 
test("check at least for 1 Uppercase character", () => {
    let password = "Pass"
    let regex = /(?=.*[A-Z])/
    expect(password).toMatch(regex);
});

//Test 4 
test("check at least for 1 lowercase character", () => {
    let password = "Pass"
    let regex = /(?=.*[a-z])/
    expect(password).toMatch(regex);
});

//Test 5 
test("check at least for 1 digit character", () => {
    let password = "Pass1"
    let regex = /[0-9]/
    expect(password).toMatch(regex);
});


//Final TEST 
test("check if password is correct", () => {
    let correctPassword = "paSsL0wK3y"
    let input = functions.verifyPassword(correctPassword)
    expect(input).toEqual(true);
});