const functions = {


    //Check if password is less than 9 characters
    hasRightLength: (password) => {
        if (password.length < 9) {
            return true
        }
        else {
            return false
        }
    },


    //Check if password is not null
    isNotNull: (password) => {
        if (password != null && password != "") {
            return true
        }
        else {
            return false
        }
    },


    //Check if password is contain minimal 1 uppercase characters 
    checkUpperCase: (password) => {
        if (/(?=.*[A-Z])/.test(password)) {
            return true
        } else {
            return false
        }
    },


    //Check if password is contain minimal 1 lowercase characters 
    checkLowerCase: (password) => {
        if (/(?=.*[a-z])/.test(password)) {
            return true
        } else {
            return false
        };
    },


    //Check if password is contain minimal 1 digit 
    checkDigit: (password) => {
        if (/[0-9]/.test(password)) {
            return true
        } else {
            return false
        };
    },


    // "FINAL/OUTER" function
    verifyPassword: password => {
        const conditions = [
            functions.hasRightLength(password),
            functions.isNotNull(password),
            functions.checkUpperCase(password),
            functions.checkLowerCase(password),
            functions.checkDigit(password)
        ];
        let trueAray = conditions.filter(e => e === true).map(e => e)
        if (conditions[3] && trueAray.length >= 3) {
            console.log("password is Correct")
            return true
        }
        else {
            console.log("Does not match the requirements, Password must contain at least 1 lowercase Character")
            return false
        }
    },
}


module.exports = functions