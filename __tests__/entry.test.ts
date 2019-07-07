import { entry } from "../src/entry";

describe("Entry", () => {
  it("Should return the Reporter.", () => {
    const type = entry({});
  });

  it("Should return the Processor.", () => {
    const type = new (entry as any)();
  });
});
