import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FormWrapper from "../components/FormWrapper.vue";
import ButtonWrapper from "../components/ButtonWrapper.vue";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import ForgetPasswordOrSignUp from "../components/ForgetPasswordOrSignUp.vue";
import NewFacebookPage from "../components/NewFacebookPage.vue";

describe("FormWrapper", () => {
  const wrapper = mount(FormWrapper);

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain the ButtonWrapper", () => {
    expect(wrapper.findComponent(ButtonWrapper).exists()).toBe(true);
  });

  it("should contain the EmailInput", () => {
    const emailInput = wrapper.findComponent(EmailInput);
    expect(emailInput.exists()).toBe(true);
  });

  it("should contain the PasswordInput", () => {
    expect(wrapper.findComponent(PasswordInput).exists()).toBe(true);
  });

  it("should contain the ForgetPasswordOrSignUp", () => {
    expect(wrapper.findComponent(ForgetPasswordOrSignUp).exists()).toBe(true);
  });

  it("should contain the NewFacebookPage", () => {
    expect(wrapper.findComponent(NewFacebookPage).exists()).toBe(true);
  });
});
