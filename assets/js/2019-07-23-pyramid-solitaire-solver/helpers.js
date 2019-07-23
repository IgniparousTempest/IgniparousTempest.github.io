/**
 * Get all the duplicate values in an array.
 *
 * Example:
 * > getDuplicates([1, 2, 3, 3, 1])
 * [1, 3]
 * @returns {Array} All the duplicate values.
 */
Array.prototype.getDuplicates = function() {
    let sortedArray = this.slice().sort();
    let results = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] === sortedArray[i]) {
            results.push(sortedArray[i]);
        }
    }
    return results;
};

Array.prototype.removeByValue = function(value) {
    let array = this.slice();
    let i = 0;
    while (array.length > 0 && i < array.length) {
        if (array[i] === value)
            array.splice(i, 1);
        else
            i++;
    }
    return array;
};