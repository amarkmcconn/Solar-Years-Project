export default class Human {
  constructor (name, age) {
    this.name  = name;
    this.age = age;
  }
  mercury = () => {
    let age =  this.age
    return Math.floor((age/.24))
  }
}