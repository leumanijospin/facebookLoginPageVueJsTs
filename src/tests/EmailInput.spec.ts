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

  it("should have a placeholder with correct value", () => {
    expect(wrapper.find("input").attributes().placeholder).toBe(
      "Adresse e-mail ou numéro de tél"
    );
  });

  it("should emit when we type value", async () => {
    await wrapper.find("input").setValue("lao@gmail.com");
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["lao@gmail.com"]);
  });

  it("should correctly display the error message when the error has a value", async () => {
    await wrapper.setProps({
      error: "email required!",
    });
    expect(wrapper.find("span").text()).toBe("email required!");
  });

  it("should have the awaited design when the error prop has value", async () => {
    expect(wrapper.find("input").classes()).toContain("border-[#dddfe2]");
    await wrapper.setProps({
      error: "email required!",
    });
    expect(wrapper.find("input").classes()).toContain("border-red-500");
  });
});
