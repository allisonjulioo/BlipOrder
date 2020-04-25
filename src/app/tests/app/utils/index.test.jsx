import { dateFormat, cultures } from "../../../utils/";

test("it Shold formated data", () => {
  expect(dateFormat("2020-03-31T14:35:44.510Z", "pt-BR")).toBe("31/03/2020");
});
test("it shold culture format date is correct", () => {
  expect(cultures["pt-BR"]).toBe("DD/MM/YYYY");
  expect(cultures["en"]).toBe("MM/DD/YYYY");
});
