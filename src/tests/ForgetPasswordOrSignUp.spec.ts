import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ForgetPasswordOrSignUp from "../components/ForgetPasswordOrSignUp.vue";

describe("ForgetPasswordOrSignUp", () => {
  const wrapper = mount(ForgetPasswordOrSignUp);
  it("should be render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a correct login name", () => {
    expect(wrapper.findAll("a")[0].text()).toBe("Mot de passe oublié ?");
  });

  it("should have the correct name to create a new account", () => {
    expect(wrapper.findAll("a")[1].text()).toBe("Créer nouveau compte");
  });

  it("should have a link that does not redirect anywhere", () => {
    expect(wrapper.find("a").attributes().href).toBe("#");
  });
});
