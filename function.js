function Pepole(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Student(firstName, lastName, age) {
  Pepole.apply(this, [firstName, lastName]);
  this.age = age;
}

const studet1 = new Student("fitsum", "kifle", 21);

console.log(studet1);
