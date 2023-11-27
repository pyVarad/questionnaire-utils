/**
 * Validate if the given string is a valid email address.
 * @param input
 * @returns
 */
export const isValidEmailAddress = (input: string): boolean => {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
    if (valid) {
        return true;
    } else {
        console.log('.  Please enter a valid email');
        return false;
    }
};

/**
 * Validates if the given string is an alpha-numeric character.
 * @param input
 * @returns
 */
export const isAlphaNumeric = (input: string): boolean => {
    const valid = /^[0-9a-z]+$/.test(input);
    if (valid) {
        return true;
    } else {
        console.log('.  Please enter an alpha numeric number');
        return false;
    }
};

/**
 * Validates if given input has all numbers.
 * @param input
 * @returns
 */
export const isNumeric = (input: string): boolean => {
    const valid = /^\d+$/.test(input);
    if (valid) {
        return true;
    } else {
        console.log('.  Please enter an valid number');
        return false;
    }
};

/**
 * Validates if the given input is of string type.
 * @param input
 * @returns
 */
export const isString = (input: string): boolean => {
    const valid = /^[a-zA-Z]+$/.test(input);
    if (valid) {
        return true;
    } else {
        console.log('.  Please enter an valid string');
        return false;
    }
};

export const isValidPackageName = (input: string): boolean => {
    const valid = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/.test(input);
    if (valid) {
        return true;
    } else {
        console.log('.  Please enter an valid package name');
        return false;
    }
};
