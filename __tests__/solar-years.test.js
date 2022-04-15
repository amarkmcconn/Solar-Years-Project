import Human from '../src/js/solar-years.js';

describe('Human', () =>  {
let human;

beforeEach(() => {
  human = new Human ("Mark", 35, 75);
});

  test('should correctly create a human object', () => {
    expect(human.name).toEqual("Mark");
    expect(human.age).toEqual(35);
    expect(human.exp).toEqual(75); 
  });

    test('should use this.Exp to get remaing life exp on planet mercury', () => {
    let merYears = human.mercuryLifeExp();
    expect(merYears).toEqual(167);
  });

  test('should use this.Exp to get remaing life exp on planet venus', () => {
    let venusYears = human.venusLifeExp();
    expect(venusYears).toEqual(65);
  });

  test('should use this.Exp to get remaing life exp on planet mars', () => {
    let marsYears = human.marsLifeExp();
    expect(marsYears).toEqual(21);
  });

  test('should use this.Exp to get remaing life exp on planet jupiter', () => {
    let jupiterYears = human.jupiterLifeExp();
    expect(jupiterYears).toEqual(3);
  });

  test('should use this.Exp to get remaing life exp on planet jupiter', () => {
    let jupiterYears = human.jupiterLifeExp();
    expect(jupiterYears).toEqual(3);
  });

  test('should return a postive number if this age is greater than life exp for mercury', () => {
    let human = new Human ("JJ", 80, 60)
    let extra = human.extraYears();
    expect(extra).toEqual(83);
  })
  test('should return a statement if this age is less than life exp for mercury', () => {
    let human = new Human ("JJ", 60, 80)
    let extra = human.extraYears();
    expect(extra).toEqual("You haven't passed your life expectancy yet!");
  })

  test('should return a postive number if this age is greater than life exp for venus', () => {
    let human = new Human ("JJ", 80, 60)
    let extra = human.extraYears1();
    expect(extra).toEqual(32);
  })
  test('should return a statement if this age is less than life exp for venus', () => {
    let human = new Human ("JJ", 60, 80)
    let extra = human.extraYears1();
    expect(extra).toEqual("You haven't passed your life expectancy yet!");
  })

  test('should return a postive number if this age is greater than life exp for mars', () => {
    let human = new Human ("JJ", 80, 60)
    let extra = human.extraYears2();
    expect(extra).toEqual(11);
  })
  test('should return a statement if this age is less than life exp for mars', () => {
    let human = new Human ("JJ", 60, 80)
    let extra = human.extraYears2();
    expect(extra).toEqual("You haven't passed your life expectancy yet!");
  })

  test('should return a postive number if this age is greater than life exp for jupiter', () => {
    let human = new Human ("JJ", 80, 60)
    let extra = human.extraYears3();
    expect(extra).toEqual(2);
  })
  test('should return a statement if this age is less than life exp for jupiter', () => {
    let human = new Human ("JJ", 60, 80)
    let extra = human.extraYears3();
    expect(extra).toEqual("You haven't passed your life expectancy yet!");
  })

  test('should return all planet ages', () => {
    let human = new Human ("JJ", 60, 80)
    human.planetAges();
    expect(human.mercuryAge).toEqual(250);
    expect(human.venusAge).toEqual(97);
    expect(human.marsAge).toEqual(32);
    expect(human.jupiterAge).toEqual(5);
  })
});
