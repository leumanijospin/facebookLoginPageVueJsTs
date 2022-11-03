import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ForgetPasswordOrSignUp from "../components/ForgetPasswordOrSignUp.vue";

describe("ForgetPasswordOrSignUp", () => {
  const wrapper = mount(ForgetPasswordOrSignUp);
  it("should render correctly", () => {
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.find("hr").exists()).toBe(true);
  });

  it("should have correct name login link", () => {
    expect(wrapper.findAll("a")[0].text()).toBe("Mot de passe oublié ?");
  });

  it("should have the correct name to create a new account", () => {
    expect(wrapper.findAll("a")[1].text()).toBe("Créer nouveau compte");
  });

  it("should have a link to the top of the current page", () => {
    expect(wrapper.find("a").attributes().href).toBe("#");
  });
});
