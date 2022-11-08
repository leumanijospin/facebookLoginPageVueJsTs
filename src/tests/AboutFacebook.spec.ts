import { describe, it, expect } from "vitest";
import AboutFacebook from "../components/AboutFacebook.vue";
import { mount } from "@vue/test-utils";

describe("AboutFacebook", () => {
  const wrapper = mount(AboutFacebook);

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should display a correct text", () => {
    expect(wrapper.find("h1").text()).toEqual("facebook");
    expect(wrapper.find("h1").classes()).toContain("text-[#1877f2]");
    expect(wrapper.find("h2").text()).toEqual(
      "Avec Facebook, partagez et restez en contact avec votre entourage."
    );
  });
});
