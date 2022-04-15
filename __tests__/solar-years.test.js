import Human from '../src/js/solar-years.js';

describe('Human', () =>  {
  test('should correctly create a human object', () => {
    const human = new Human ("Mark", 35);
    expect(human.name).toEqual("Mark");
    expect(human.age).toEqual(35); 
  });

  test('should use human.age to update Mercury years to correct value', () => {
    const human = new Human ("Mark", 35);
    expect(human.age).toEqual(35);
    expect(human.mercury).toEqual(145);
  });
});
