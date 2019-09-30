/**
 * @file Data Structure - Stack
 * @author kureshikudereti@baidu.com
 */

/**
 * Stack
 *
 * @class
 */
let Stack = function () {
    /**
     * Record the top position of the stack.
     *
     * @type {number}
     */
    this.top = 0;

    /**
     * Memory of elements in the stack.
     *
     * @type {Array}
     */
    this.dataStore = [];
};

/**
 * Push a new element into the stack.
 *
 * @param element
 */
Stack.prototype.push = function (element) {
    this.dataStore[this.top++] = element;
};

/**
 * Eject the element top of the stack.
 *
 * @returns {*}
 */
Stack.prototype.pop = function () {
    return this.dataStore[--this.top];
};

/**
 * Preview the elements at the top of the stack.
 *
 * @returns {*}
 */
Stack.prototype.peek = function () {
    return this.dataStore[this.top - 1];
};

/**
 * Get the number of elements in the stack.
 *
 * @returns {number}
 */
Stack.prototype.length = function () {
    return this.top;
};

/**
 * Empty the stack.
 */
Stack.prototype.clear = function () {
    this.top = 0;
};

/**
 * Conversion of number system.
 *
 * @param {number} num The number to be converted.
 * @param {number} base The cardinality of the new data system.
 */
let conversionNumSys = function (num, base) {
    let s = new Stack();

    do {
        s.push(num % base);
        num = Math.floor(num / base);
    }
    while (num > 0);

    let converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }

    return +converted;
};
