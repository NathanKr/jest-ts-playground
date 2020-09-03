import * as constants from "../src/constants";

jest.mock("../src/constants", () => ({
  DB_NAME: "Nathan",
}));

test("const DB_NAME is override correctly", () => {
  expect(constants.DB_NAME).toEqual("Nathan");
});
