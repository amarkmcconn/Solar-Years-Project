import Human from '../src/js/solar-years.js';

describe('Human', () =>  {
let human;

beforeEach(() => {
  human = new Human ("Mark", 35);
})

  test('should correctly create a human object', () => {
    expect(human.name).toEqual("Mark");
    expect(human.age).toEqual(35); 
  });

  test('should use this.age to find Mercury years to correct value', () => {
    let mercuryYears = human.mercury();
    expect(mercuryYears).toEqual(145);
  });

  test('should use this.age to find Venus years', () => {
    let venusYears = human.venus();
    expect(venusYears).toEqual(56);
  })

  test('should use this.get to find Mars years', () => {
    let marsYears = human.mars();
    expect(marsYears).toEqual()
  })
});
