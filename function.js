function Pepole(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = () => {
    return this.firstName + " " + this.lastName;
  };
}

function Student(firstName, lastName, age) {
  Pepole.apply(this, [firstName, lastName]);
  this.age = age;
}

const studet1 = new Student("fitsum", "kifle", 21);

const FULLNAME = new Pepole("miki", "luelsegadi").fullname;

