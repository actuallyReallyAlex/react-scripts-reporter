const divide = (x, y) => x / y;

describe("Test", () => {
  it("Divides 5 into 10.", () => {
    expect(divide(10, 5)).toBe(2);
  });
});
