export default class Human {
  constructor (name, age, gender) {
    this.name  = name;
    this.age = age;
    this.gender = gender
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
  jupiter = () => {
    let age  = this.age
    return Math.round((age/11.86))
  }
  expectancy = () => {
    let gender = this.gender
      if (gender = male) {
        
    }

  }
}