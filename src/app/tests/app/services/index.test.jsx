import { apiUrl } from "../../../services";

test("it Shold apiUrl", () => {
  expect(apiUrl).toBe("http://localhost:3333");
});
