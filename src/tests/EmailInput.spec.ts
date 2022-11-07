import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import EmailInput from "../components/EmailInput.vue";

describe("EmailInput", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(EmailInput, {
      props: {
        modelValue: "",
        placeholder: "Adresse e-mail ou numéro de tél",
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a design when you have an empty error message", () => {
    expect(wrapper.find("input").classes()).toContain("border-[#dddfe2]");
  });

  it("should have a placeholder with correct value", () => {
    expect(wrapper.find("input").attributes().placeholder).toBe(
      "Adresse e-mail ou numéro de tél"
    );
  });

  it("should emit when we type value", async () => {
    await wrapper.find("input").setValue("ninho@gmail.com");
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([
      "ninho@gmail.com",
    ]);
  });

  it("should be correctly display the error message when the error prop has a value", async () => {
    await wrapper.setProps({
      error: "email required!",
    });
    expect(wrapper.find("span").text()).toBe("email required!");
  });

  it("should have design when error prop has value", async () => {
    await wrapper.setProps({
      error: "email required!",
    });
    expect(wrapper.find("input").classes()).toContain("border-red-500");
  });
});
