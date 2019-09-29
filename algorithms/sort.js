/**
 * @file Summary of ten classical sorting algorithms.
 * @author kureshikudereti@baidu.com
 */

/**
 * Generate a random integer between minimum and maximum.
 *
 * @param {number=} min (optional)
 * @param {number=} max (optional)
 * @return {number} random integer
 */
let genRandomInt = function (min, max) {
	if (min == null) {min = 0}
	if (max == null) {max = 100}
	min = Math.ceil(min);
    max = Math.floor(max);
    return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Generate an array of specified length with random integers .
 *
 * @param {number} len specified the length of arr.
 * @param {number=} min (optional)
 * @param {number=} max (optional)
 * @return {Array} An array of random integers.
 */
let genRandomArr = function (len, min, max) {
	let arr = [];
	while (len > 0) {
		arr.push(genRandomInt(min, max));
		--len;
	}
	return arr;
};

/**
 * 1.1 Bubble Sort
 *
 * @param {Array} arr Given array.
 * @return {Array} Sorted array.
 */
let bubbleSort = function (arr) {
	console.time('bubbleSort');
	let len = arr.length;
	let temp;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.timeEnd('bubbleSort');
	return arr;
};

/**
 * 1.2 Bubble Sort 2
 *
 * @param {Array} arr Given array.
 * @return {Array} Sorted array.
 */
let bubbleSort2 = function (arr) {
	console.time('bubbleSort2');
	let i = arr.length - 1;
	let pos;
	let temp;
	while (i > 0) {
		pos = 0;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]) {
				pos = j;
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
		i = pos;
	}
	console.timeEnd('bubbleSort2');
	return arr;
};

/**
 * 2.1 Selection Sort
 *
 * @param {Array} arr Given array.
 * @return {Array} Sorted array.
 */
let selectionSort = function (arr) {
	console.time('selectionSort');
	let len = arr.length;
	let index;
	let temp;
	for (let i = 0; i < len - 1; i++) {
		index = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[index] > arr[j]) {
				index = j;
			}
		}
		temp = arr[index];
		arr[index] = arr[i];
		arr[i] = temp;
	}
	console.timeEnd('selectionSort');
	return arr;
};

/**
 * 2.2 Selection Sort 2
 *
 * @param {Array} arr Given array.
 * @return {Array} Sorted array.
 */
let selectionSort2 = function (arr) {
	console.time('selectionSort2');
	let len = arr.length;
	let index, temp;
	for (let i = 0; i < len - 1; i++) {
		index = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[index] > arr[j]) {
				index = j;
			}
		}
		if (i !== index) {
			temp = arr[index];
			arr[index] = arr[i];
			arr[i] = temp;
		}
	}
	console.timeEnd('selectionSort2');
	return arr;
};

/**
 * 3.1 Insertion Sort
 *
 * @param {Array} arr Given array.
 * @return {(Array|string)} Sorted array | Error Message.
 */
let insertionSort = function (arr) {
    if (!Array.isArray(arr)) {
        return 'Parameter arr is not an Array';
    }
    console.time('insertionSort');
    for (let i = 1, len = arr.length; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.timeEnd('insertionSort');
    return arr;
};












