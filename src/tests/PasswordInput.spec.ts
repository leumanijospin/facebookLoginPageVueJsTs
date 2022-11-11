import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import PasswordInput from "../components/PasswordInput.vue";

describe("Password", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(PasswordInput, {
      props: {
        modelValue: "",
        placeholder: "Mot de passe",
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a placeholder with correct value", () => {
    expect(wrapper.find("input").attributes().placeholder).toBe("Mot de passe");
  });

  it("should emit the awaited event when we type value", async () => {
    await wrapper.find("input").setValue("password");
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["password"]);
  });

  it("should correctly display the error message when the error prop has a value", async () => {
    expect(wrapper.find("input").text()).not.toBe("password required!");
    await wrapper.setProps({
      error: "password required!",
    });
    expect(wrapper.find("span").text()).toBe("password required!");
  });

  it("should have the awaited design when the error prop has value", async () => {
    expect(wrapper.find("input").classes()).not.toContain("border-red-500");
    await wrapper.setProps({
      error: "password required!",
    });
    expect(wrapper.find("input").classes()).toContain("border-red-500");
  });
});
