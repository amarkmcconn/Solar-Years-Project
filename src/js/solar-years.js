export default class Human {
  constructor (name, age, lifeExp) {
    this.name  = name;
    this.age = age;
    this.exp = lifeExp;
  }
  mercury = () => {
    let age = this.age
    return Math.round((age/.24));
  }
  venus = () => {
    let age = this.age
    return Math.round((age/.62));
  }
  mars = () => {
    let age = this.age
    return Math.round((age/1.88));
  }
  jupiter = () => {
    let age  = this.age
    return Math.round((age/11.86));
  }
  mercuryLifeExp = () => {
    return ((Math.round((this.exp/.24))) - (Math.round((this.age/.24))));
  }
  
}
