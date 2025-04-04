"use strict";

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.say = function (message) {
  return (
    "[" +
    this +
    "]: " +
    this.firstName +
    " " +
    this.lastName +
    ' said: "' +
    message +
    '"'
  );
};

Person.prototype.toString = function () {
  return "[Person]";
};

const moe = new Person("Mo", "El");

const func = moe.say.bind(moe);

console.log(func("asdasda"));
// console.log(person1("fitsum", "kifle"));
// function Student(firstName, lastName, age) {
//   Pepole.apply(this, [firstName, lastName]);
//   this.age = age;
// }

// const studet1 = new Student("new", "kifle", 21);

// const FULLNAME = new Pepole("miki", "luelsegadi").fullname;

// const fullname = Pepole.apply({ age: 21 },[ "fitsum", "kifle"]);
// console.log(fullname);
