/*
Create a Person class with a greet method that returns the first and last name
of the person with a greeting. For example if the first name is 'Bob' and the
last name is 'Smith' then it should return 'Hello, Bob Smith!'.
*/




class Person {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }
    get name() {
        return this._name;
    }
    get lastName() {
        return this._lastName;
    }
    greet() {
        return `Hello, ${this._name} ${this._lastName}!`;
    }
        
}


