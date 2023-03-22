import getExampleData from "./script";

describe("getExampleData", () => {
  it("returns the correct maximum of items", async () => {
    const data = await getExampleData(3);
    expect(data.length).toBeLessThanOrEqual(3);
  });
});
