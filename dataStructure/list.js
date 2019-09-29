/**
 * @file Data Structure - List
 * @author kureshikudereti@baidu.com
 */

/**
 * List
 *
 * @class
 */
function List() {
    /**
     * Position of flag bit.
     *
     * @type {number}
     */
    this.pos = 0;

    /**
     * Size of the list.
     *
     * @type {number}
     */
    this.listSize = 0;

    /**
     * List elements memory.
     *
     * @type {Array}
     */
    this.dataStore = [];
}

/**
 * Adds a new element to the list.
 *
 * @param {...*} elements
 */
List.prototype.append = function (elements) {
    let len = arguments.length;
    for (let i = 0; i < len; i++) {
        this.dataStore[this.listSize++] = arguments[i];
    }
};

/**
 * Search the element in the list.
 *
 * @param {*} element
 * @return {number} The index of the element being searched.
 */
List.prototype.find = function (element) {
    for (let i = 0, length = this.dataStore.length; i < length; i++) {
        if (this.dataStore[i] === element) {
            return i
        }
    }
    return -1;
};

/**
 * Remove the element from the list.
 *
 * @param {*} element
 * @return {boolean} Delete operation successful or not.
 */
List.prototype.remove = function (element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        if (this.pos === this.listSize) --this.pos;
        return true;
    }
    return false;
};

/**
 * Get the list Size.
 *
 * @return {number} The size of the list.
 */
List.prototype.length = function () {
    return this.listSize;
};

/**
 * Display all elements in the list.
 *
 * @return {Array}
 */
List.prototype.toString = function () {
    return this.dataStore;
};

/**
 * Insert the element into the list
 * after the element referenced by the 'after'.
 *
 * @param element
 * @param after
 * @return {boolean}
 */
List.prototype.insert = function (element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
};

/**
 * Empty the list.
 */
List.prototype.clear = function () {
    this.dataStore.length = this.listSize = this.pos = 0;
};

/**
 * Determine whether the list contains a given element.
 *
 * @param element
 * @return {boolean}
 */
List.prototype.contains = function (element) {
    for (let i = 0, length = this.dataStore.length; i < length; ++i) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
};

/**
 *  Shifts the flag bit to the front of the list.
 */
List.prototype.front = function () {
    this.pos = 0;
};

/**
 * Shifts the flag bit to the end of the list.
 */
List.prototype.end = function () {
    this.pos = this.listSize - 1;
};

/**
 * Shifts the flag bit forward.
 */
List.prototype.prev = function () {
    if (this.pos > -1) {
        --this.pos;
    }
};

/**
 * Shifts the flag bit backward.
 */
List.prototype.next = function () {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
};

/**
 * Gets the current position of the flag bit.
 * @return {number}
 */
List.prototype.currPos = function () {
    return this.pos;
};

/**
 * Moves the flag bit to a given position.
 *
 * @param position
 * @return {boolean}
 */
List.prototype.moveTo = function (position) {
    if (position > -1 && position < this.listSize) {
        this.pos = position;
        return true;
    }
    return false;
};

/**
 * Gets the element that the current flag bit points to.
 *
 * @return {*}
 */
List.prototype.getElement = function () {
    return this.dataStore[this.pos];
};

/**
 * Determine if the next digit exists in the list.
 *
 * @return {boolean}
 */
List.prototype.hasNext = function () {
    return this.pos < this.listSize;
};

/**
 * Determine if the previous digit exists in the list.
 *
 * @return {boolean}
 */
List.prototype.hasPrev = function () {
    return this.pos >= 0;
};
