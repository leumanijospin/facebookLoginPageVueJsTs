import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NewFacebookPage from "../components/NewFacebookPage.vue";

describe("NewFacebookPage", () => {
  const wrapper = mount(NewFacebookPage);

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a link to the top of the current page", () => {
    expect(wrapper.find("a").attributes().href).toBe("#");
  });

  it("should have correct name to create a new facebook page", () => {
    expect(wrapper.find("a").text()).toBe("Créer une Page");
  });

  it("should have correct text to explain new facebook page link", () => {
    expect(wrapper.find("p").text()).toBe(
      "Créer une Page pour une célébrité, une marque ou une entreprise."
    );
  });
});
