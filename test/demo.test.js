describe('Demo Test', () => {
  it('should testing toBe', () => {
    expect(1 + 1).toBe(2);
    expect(true).toBe(true);
    expect({}).not.toBe({});
  });

  it('should testing toEqual', () => {
    const subject = { name: "Wanwan" };
    let actual = { 
      name: "Wanwan" 
    };
    expect(subject).toEqual(actual);

    const listOfApprentices = [
      {name: 'Anakin Skywalker'},
      {name: 'Count Dooku'},
      {name: 'Luke Skywalker'},
    ];
    actual = [
      {name: 'Anakin Skywalker'},
      {name: 'Luke Skywalker'},
      {name: 'Count Dooku'},
    ];
    expect(listOfApprentices).not.toEqual(actual);
  });

  it('should testing toMatchObject', () => {
    const subject = { name: "Wanwan" };
    let actual = { 
      name: "Wanwan" 
    };
    expect(subject).toMatchObject(actual);

    const listOfApprentices = [
      {name: 'Anakin Skywalker'},
      {name: 'Count Dooku'},
      {name: 'Luke Skywalker'},
    ];
    actual = [
      {name: 'Anakin Skywalker'},
      {name: 'Luke Skywalker'},
      {name: 'Count Dooku'},
    ];
    expect(listOfApprentices).not.toMatchObject(actual);
  });
});