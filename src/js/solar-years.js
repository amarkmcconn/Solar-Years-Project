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
  venusLifeExp = () => {
    return ((Math.round((this.exp/.62))) - (Math.round((this.age/.62))));
  }
  marsLifeExp = () => {
    return ((Math.round((this.exp/1.88))) - (Math.round((this.age/1.88))));
  }
  jupiterLifeExp = () => {
    return ((Math.round((this.exp/11.86))) - (Math.round((this.age/11.86))));
  }
  
}
