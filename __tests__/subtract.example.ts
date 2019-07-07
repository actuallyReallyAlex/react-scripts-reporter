const subtract = (x, y) => x - y;

describe("Test", () => {
  it("Subtracts 4 from 5.", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});
