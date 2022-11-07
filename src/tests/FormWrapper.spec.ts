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
    const buttonWrapper = wrapper.findComponent(ButtonWrapper);
    expect(buttonWrapper.exists()).toBe(true);
    expect(buttonWrapper.props().name).toBe("Se connecter");
  });

  it("should contain the EmailInput", () => {
    const emailInput = wrapper.findComponent(EmailInput);
    expect(emailInput.exists()).toBe(true);
    expect(emailInput.props().placeholder).toBe(
      "Adresse e-mail ou numéro de tél."
    );
    expect(emailInput.props().required).toBe(true);
    expect(emailInput.props().error).toBe("");
  });

  it("should contain the PasswordInput", () => {
    const passwordInput = wrapper.findComponent(PasswordInput);
    expect(passwordInput.exists()).toBe(true);
    expect(passwordInput.props().placeholder).toBe("Mot de passe");
  });

  it("should contain the ForgetPasswordOrSignUp", () => {
    expect(wrapper.findComponent(ForgetPasswordOrSignUp).exists()).toBe(true);
  });

  it("should contain the NewFacebookPage", () => {
    expect(wrapper.findComponent(NewFacebookPage).exists()).toBe(true);
  });
});
