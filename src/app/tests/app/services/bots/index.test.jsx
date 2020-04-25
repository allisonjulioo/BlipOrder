import { get, profile, botDelete } from "../../../../services/bots";

describe("Api test call", () => {
  test("it Shold profile return bot details", async () => {
    const response = await profile(3);
    expect(response.hasOwnProperty("shortName")).toBeTruthy();
  });
  test("it Shold return 2 array contain favorities", async () => {
    const response = await get();
    expect(response.length === 2).toBeTruthy();
  });
  test("it Shold return falsy if not passed id in delete", async () => {
    const response = await botDelete();
    expect(response).toBeFalsy();
  });
});
