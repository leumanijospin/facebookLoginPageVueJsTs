import { describe, expect, it } from "vitest";
import { isEmailValid } from "../utils/emailLogin";

describe("isEmailValid", () => {
  it("should return true if email is valid", () => {
    expect(isEmailValid("helga@gmail.com")).toStrictEqual(true);
  });

  it("should return true if email is valid", () => {
    expect(isEmailValid("helga@yahoo.com")).toStrictEqual(true);
  });

  it("should return true if email is valid", () => {
    expect(isEmailValid("helga@github.com")).toStrictEqual(true);
  });

  it("should return true if email is valid", () => {
    expect(isEmailValid("helga@mail.com")).toStrictEqual(true);
  });

  it("should return true if email is valid", () => {
    expect(isEmailValid("helga@mail.fr")).toStrictEqual(true);
  });

  it("should return false if email is invalid", () => {
    expect(isEmailValid("helga")).toStrictEqual(false);
  });

  it("should return false if email is invalid", () => {
    expect(isEmailValid("helga@gmail")).toStrictEqual(false);
  });

  it("should return false if email is invalid", () => {
    expect(isEmailValid("helga@gmail.c")).toStrictEqual(false);
  });
});
