import Human from '../src/js/solar-years.js';

describe('Human', () =>  {
  test('should correctly create a human object', () => {
    const human = new Human ("Mark", 35);
    expect(human.name).toEqual("Mark");
    expect(human.age).toEqual(35); 
  });

  test('should use this.age to find Mercury years to correct value', () => {
    const human = new Human ("Mark", 35);
    let mercuryYears = human.mercury();
    expect(mercuryYears).toEqual(145);
  });

  test('should use this.age to find Venus years', () => {
    const human = new Human ("Mark", 35);
    let venusYears = human.venus();
    expect(venusYears).toEqual(56);
  })
});
