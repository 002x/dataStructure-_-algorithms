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
 * @param {*} element
 */
List.prototype.append = function (element) {
    this.dataStore[this.listSize++] = element;
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

// 将标识位移至列表开头
List.prototype.front = function () {
    this.pos = 0;
};

// 将标识位移至列表末尾
List.prototype.end = function () {
    this.pos = this.listSize - 1;
};

// 向前移动标识位
List.prototype.prev = function () {
    if (this.pos > -1) {
        --this.pos;
    }
};

// 向后移动标识位
List.prototype.next = function () {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
};

// 获取标识位当前位置
List.prototype.currPos = function () {
    return this.pos;
};

// 将标识位移至给定位置
List.prototype.moveTo = function (position) {
    if (position > -1 && position < this.listSize) {
        this.pos = position;
        return ture;
    }
    return false;
};

// 获取标识位上的元素
List.prototype.getElement = function () {
    return this.dataStore[this.pos];
};

// 判断是否存在下一位
List.prototype.hasNext = function () {
    return this.pos < this.listSize;
};

// 判断是否存在上一位
List.prototype.hasPrev = function () {
    return this.pos >= 0;
};





let twoSum = function (arr, target) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return 'no two sum solution';
};

let twoSum2 = function (arr, target) {
    let map = {};
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        map[arr[i]] = i;
    }
};

