export default class Human {
  constructor (name, age, lifeExp) {
    this.name  = name;
    this.age = age;
    this.exp = lifeExp;
  }
  mercury = () => {
    return (Math.round((this.age/.24)));
  }
  venus = () => {
    return (Math.round((this.age/.62)));
  }
  mars = () => {
    return (Math.round((this.age/1.88)));
  }
  jupiter = () => {
    return (Math.round((this.age/11.86)));
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
  extraYears() {
    if (this.mercuryLifeExp() < 0) {
      return (Math.abs(((Math.round((this.exp/.24))) - (Math.round((this.age/.24))))));
    } else {
      return "You haven't passed your life expectancy yet!"
    }
  } 
  extraYears1() {     
    if (this.venusLifeExp() < 0) {
      return (Math.abs(((Math.round((this.exp/.62))) - (Math.round((this.age/.62))))));
    } else {
      return "You haven't passed your life expectancy yet!"
    }
  }
  extraYears2() {     
    if (this.marsLifeExp() < 0) {
      return (Math.abs(((Math.round((this.exp/1.88))) - (Math.round((this.age/1.88))))));
    } else {
      return "You haven't passed your life expectancy yet!"
    }
  }
}