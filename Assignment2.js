

function Person() {
  this.name = "Xaviour";
  this.country = "India";
  this.language = "Hindi";
}

function Student() {
  this.course = "Engineering";
  this.college = "SDM College";
}
Student.prototype = new Person;
var stud = new Student();
console.log(stud.country);
stud.country="USA";
console.log(stud.country);
