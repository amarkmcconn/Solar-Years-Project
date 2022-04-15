export default class Human {
  constructor (name, age) {
    this.name  = name;
    this.age = age;
  }
  mercury = () => {
    let age =  this.age
    return Math.round((age/.24))
  }
  venus = () => {
    let age = this.age
    return Math.round((age/.62))
  }
  mars = () => {
    let age = this.age
    return Math.round((age/1.88))
  }
  jupiter
}