const add = (x, y) => x + y

describe('Test', () => {
  it('Adds 1 and 2.', () => {
    expect(add(1, 2)).toBe(3)
  })
})
