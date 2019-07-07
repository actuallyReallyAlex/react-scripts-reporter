const multiply = (x, y) => x * y;

describe("Test", () => {
  it("Multiplies 2 and 3.", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
