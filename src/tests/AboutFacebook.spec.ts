import { describe, it, expect } from "vitest";
import AboutFacebook from "../components/AboutFacebook.vue";
import { mount } from "@vue/test-utils";

describe("AboutFacebook", () => {
  const wrapper = mount(AboutFacebook);

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should display a correct text", () => {
    expect(wrapper.find("h1").text()).toBe("facebook");
    expect(wrapper.find("h2").text()).toContain("Avec Facebook, partagez");
  });
});
