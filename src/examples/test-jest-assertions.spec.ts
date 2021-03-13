describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
  });
});

describe('Objects', () => {
  it('test jest assertions with objects', () => {
    const person = { name: 'Luiza', age: 30 };
    const anoterPerson = { ...person };

    // expect(person).toBe(anoterPerson); // compara com ===
    expect(person).toEqual(anoterPerson);

    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30);

    expect(person.name).toBe('Luiza');
  });
});
