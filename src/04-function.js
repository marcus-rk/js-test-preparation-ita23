/**
 * This function greets a user by name.
 *
 * @param {string} name - Name of the user.
 * @returns {string} - Greeting message for the user.
 *
 * Usage:
 * const greetJack = greetUser("Jack"); // greetJack will be "Hello, Jack"
 */
const greetUser = (name) => {
    return `Hello, ${name}`;
}


/**
 * This function converts a string to spinal case.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The spinal cased string.
 *
 * Usage:
 * const spinal = toSpinalCase("This Is Spinal Tap"); // spinal will be "this-is-spinal-tap"
 */
const toSpinalCase = (str) => {
    const stringLowerCase = str.toLowerCase();
    const stringSplitArray = stringLowerCase.split(" ");

    // test doesn't do lower-case
    return stringSplitArray.join("-");
}

/**
 * This function calculates the time taken by light to travel a certain distance.
 *
 * @param {number} distance - The distance in kilometers.
 * @returns {number} - Time taken in seconds.
 *
 * Usage:
 * const time = lightTravelTime(300000); // time will be 1
 */
const lightTravelTime = (distance) => {
    const speedOfLight = 300000;
    const time = distance/speedOfLight;
    return time;
}
