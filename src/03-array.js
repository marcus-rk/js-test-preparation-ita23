/**
 * This function returns the last element in an array
 *
 * @param {Array<number>} array - The array to find the last number of
 * @returns {number} - The last number in the array
 *
 * Usage:
 * const lastElement = getLastElement([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
 * console.log(lastElement); // 20
 */
function getLastElement(array) {
    const lastElementIndex = array.length-1;
    return array[lastElementIndex];
}


/**
 * This function returns an array of even numbers from the specified start to finish.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing even numbers from start to finish.
 *
 * Usage:
 * const numbers = returnEvenNumbers(2, 20);
 * // numbers will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */
function returnEvenNumbers(start, finish) {
    let evenNumbersArray = [];

    for (let i = start; i <= finish; i++) {
        if (i % 2 === 0)
            evenNumbersArray.push(i);
    }

    return evenNumbersArray;
}


/**
 * This function returns a new array with the square of each number from the input array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number[]} - Array with the square of each number.
 *
 * Usage:
 * const squares = squareArray([1, 2, 3]); // squares will be [1, 4, 9]
 * const anotherSquares = squareArray([-1, -2, 3]); // anotherSquares will be [1, 4, 9]
 */
function squareArray(array) {
    let squareArray = [];

    array.forEach((number) => {
        const squareNumber = Math.pow(number, 2);
        squareArray.push(squareNumber);
    });

    return squareArray;
}

/**
 * This function returns the maximum number in an array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number} - The maximum number in the array.
 *
 * Usage:
 * const max = findMax([1, 2, 3]); // max will be 3
 * const anotherMax = findMax([-1, -2, 3]); // anotherMax will be 3
 */
function findMax(array) {
    let currentMax = array[0];

    // start at index 1
    for (let i = 1; i < array.length; i++) {
        const currentNumber = array[i];
        if (currentNumber > currentMax)
            currentMax = currentNumber
    }

    return currentMax;
}