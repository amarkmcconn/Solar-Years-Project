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

  test('should use this.age to find Mercury years to correct value', () => {
    let mercuryYears = human.mercury();
    expect(mercuryYears).toEqual(146);
  });

  test('should use this.age to find Venus years', () => {
    let venusYears = human.venus();
    expect(venusYears).toEqual(56);
  });

  test('should use this.age to find Mars years', () => {
    let marsYears = human.mars();
    expect(marsYears).toEqual(19)
  });

  test('should use this.age to find jupiter years', () => {
    let jupiterYears = human.jupiter();
    expect(jupiterYears).toEqual(3)
  });

  test('should use this.Exp to get remaing life exp on planet mercury', () => {
    let merYears = human.mercuryLifeExp();
    expect(merYears).toEqual(167);
  });

  test('should use this.Exp to get remaing life exp on planet venus', () => {
    let venusYears = human.venusLifeExp();
    expect(venusYears).toEqual(49);
  });

  test('should use this.Exp to get remaing life exp on planet mars', () => {
    let marsYears = human.marsLifeExp();
    expect(marsYears).toEqual(16);
  });

  test('should use this.Exp to get remaing life exp on planet jupiter', () => {
    let jupiterYears = human.jupiterLifeExp();
    expect(jupiterYears).toEqual(2);
  });
});
