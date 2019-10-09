/**
 * @file Learn ES6.
 * @author kureshikudereti@baidu.com
 */

/**
 * Simulation of the ES6 Class.
 *
 * 1.External 'Person' declared with the keyword 'let' can be modified.
 * 2.Internal 'Person' declared with the keyword 'const' cannot be modified.
 *
 * @class Person
 * @type {function(): Person}
 */
let Person = (function () {
    'use strict';

    const Person = function (name) {
        // Be sure to invoked the function with the keyword 'new'
        if (typeof new.target === 'undefined') {
            throw new Error('The constructor must be invoked with the keyword \'new\'')
        }
        this.name = name;
    };

    Object.defineProperty(Person.prototype, 'sayName', {
        value: function () {
            // Ensure that the method is not invoked with the keyword new.
            if (typeof new.target !== 'undefined') {
                throw new Error('Cannot invoked this method with the keyword \'new\'');
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });

    return Person;
}());

/**
 * Anonymous class expression.
 *
 * @class PersonClass
 * @type {PersonClass}
 */
let PersonClass = class {
    // This is equivalent to the constructor of the Person class.
    constructor (name) {
        this.name = name;
    }
    // This is equivalent to the Person.prototype.sayName.
    sayName () {
        console.log(this.name);
    }
};

/**
 * Named class expression.
 *
 * @class Person1
 * @type {Person1}
 */
let Person1 = class Person2 {
    constructor (name) {
        this.name = name;
    }
    sayName () {
        console.log(this.name);
    }
};
console.log(typeof Person1); // 'function'
console.log(typeof Person2); // 'undefined'

/**
 * Simulation of the Person1.
 *
 * @class
 * @type {Person3}
 */
let Person3 = (function () {
    'use strict';

    const Person4 = function (name) {
        // Be sure to invoked the function with the keyword 'new'
        if (new.target === 'undefined') {
            throw new Error('The constructor must be invoked with the keyword \'new\'')
        }
        this.name = name;
    };

    Object.defineProperty(Person4.prototype, 'sayName', {
        value: function () {
            if (new.target !== 'undefined') {
                throw new Error('Cannot invoked this method with the keyword \'new\'');
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });

    return Person4;
}());

/**
 * Passes the class into the function as an argument.
 *
 * @param {Function} classDef
 * @return {Object} new Class
 */
function createObject(classDef) {
    return new classDef();
}
let obj = createObject(class {
    sayHi () {
        console.log('Hi');
    }
});
obj.sayHi();

/**
 * The singleton pattern.
 */
let person = (new class {
    constructor (name) {
        this.name = name;
    }
    sayName () {
        console.log(this.name);
    }
}('kureshikudereti@baidu.com'));

/**
 * Accessor property.
 */
class CustomHTMLElement {
    constructor (element) {
        this.element = element;
    }
    get html () {
        return this.element.innerHTML;
    }
    set html (value) {
        this.element.innerHTML = value;
    }
}
let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');
console.log('get' in descriptor);
console.log('set' in descriptor);
/**
 * The equivalent implementation of the class CustomHTMLElement.
 */
let CustomHTMLElement2 = (function () {
    'use strict';

    const CustomHTMLElement2 = function (element) {
        if (new.target === 'undefined') {
            throw new Error('The constructor must be invoked with the keyword \'new\'')
        }
        this.element = element;
    };

    Object.defineProperty(CustomHTMLElement2.prototype, 'html', {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.element.innerHTML;
        },
        set: function (value) {
            this.element.innerHTML = value;
        }
    });

    return CustomHTMLElement2;
}());

/**
 * new.target
 */
function Foo () {
    if (!new.target) {
        throw new Error('Foo() must be called with keyword new');
    }
    console.log('Foo instantiated with new');
}
Foo(); // throws 'Foo() must be called with keyword new'.
new Foo(); // logs 'Foo instantiated with new'.

class A {
    constructor () {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor () {
        super();
    }
}
let a = new A(); // logs 'A'.
let b = new B(); // logs 'B'.

class C {
    constructor () {
        console.log(new.target);
    }
}
class D extends C {
    constructor () {
        super();
    }
}
let c = new C(); // logs class C {constructor () { console.log(new.target); }}
let d = new D(); // logs class D {constructor () { super(); }}

/**
 * Computable member name.
 */
let methodName = 'sayName';
class PersonClassA {
    constructor (name) {
        this.name = name;
    }
    [methodName] () {
        return this.name;
    }
}
let PA = new PersonClassA('A');
PA.sayName(); // logs 'A'.

let propertyName = 'html';
class CustomHTMLElementS {
    constructor(element) {
        this.element = element;
    }
    get [propertyName] () {
        return this.element.innerHTML;
    }
    set [propertyName] (value) {
        this.element.innerHTML = value;
    }
}
let CHES = new CustomHTMLElementS(document.body);
let element = CHES.html;
CHES.html = 'HTML';

/**
 * Static method.
 */
// ES5
function PersonSM1 (name) {
    this.name = name;
}
PersonSM1.prototype.sayName = function () {
    return this.name;
};
PersonSM1.create = function (name) {
    return new PersonSM1(name);
};
let psm1a = new PersonSM1('psm1a');
let psm1b = PersonSM1.create('psm1b');
// ES6
class PersonSM2 {
    // This is equivalent to the constructor of the PersonSM1 class.
    constructor (name) {
        this.name = name;
    }
    // This is equivalent to the PersonSM1.prototype.sayName().
    sayName () {
        return this.name;
    }
    // This is equivalent to the PersonSM1.create().
    static create (name) {
        return new PersonSM1(name);
    }
}
let psm2a = new PersonSM2('psm2a');
let psm2b = PersonSM2.create('psm2b');

/**
 * Extends and derived class.
 */
// ES5
function Rectangle5 (length, width) {
    this.length = length;
    this.width = width;
}
Rectangle5.prototype.getArea = function () {
    return this.length * this.width;
};
function Square5 (length) {
    Rectangle5.call(this, length, length);
}
Square5.prototype = Object.create(Rectangle5.prototype, {
    constructor: {
        value: Square5,
        enumerable: true,
        writable: true,
        configurable: true
    }
});
// ES6
class Rectangle6 {
    constructor (length, width) {
        this.length = length;
        this.width = width;
    }
    getArea () {
        return this.length * this.width;
    }
}
class Square6 extends Rectangle6 {
    constructor(length) {
        // This is equivalent to the Rectangle.call(this, length, length) in Square5.
        super(length, length);
    }
}
