import ButtonWrapper from "../components/ButtonWrapper.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("ButtonWrapper", () => {
  const wrapper = mount(ButtonWrapper, {
    props: {
      name: "Se connecter",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("should have awaited name", () => {
    expect(wrapper.find("button").text()).toBe("Se connecter");
  });
});
