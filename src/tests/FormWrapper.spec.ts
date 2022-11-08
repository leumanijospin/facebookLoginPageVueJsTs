import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import FormWrapper from "../components/FormWrapper.vue";
import ButtonWrapper from "../components/ButtonWrapper.vue";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import ForgetPasswordOrSignUp from "../components/ForgetPasswordOrSignUp.vue";
import NewFacebookPage from "../components/NewFacebookPage.vue";

describe("FormWrapper", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(FormWrapper);
  });

  it("should be render correctly", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should be contain the ButtonWrapper", () => {
    const buttonWrapper = wrapper.findComponent(ButtonWrapper);
    expect(buttonWrapper.exists()).toBeTruthy();
    expect(buttonWrapper.props().name).toBe("Se connecter");
  });

  it("should be contain the EmailInput", async () => {
    const emailInput = wrapper.findComponent(EmailInput);
    expect(emailInput.exists()).toBeTruthy();
    expect(emailInput.props().placeholder).toBe(
      "Adresse e-mail ou numéro de tél."
    );
    expect(emailInput.props().required).toBe(true);
    expect(emailInput.props().error).toBe("");
  });

  it("should be contain the PasswordInput", () => {
    const passwordInput = wrapper.findComponent(PasswordInput);
    expect(passwordInput.exists()).toBe(true);
    expect(passwordInput.props().placeholder).toBe("Mot de passe");
  });

  it("should be contain the ForgetPasswordOrSignUp", () => {
    expect(wrapper.findComponent(ForgetPasswordOrSignUp).exists()).toBeTruthy();
  });

  it("should be contain the NewFacebookPage", () => {
    expect(wrapper.findComponent(NewFacebookPage).exists()).toBeTruthy();
  });

  it("should be correctly display the error message when email is invalid", async () => {
    let emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("jos");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("please, your email is incorrect!");
  });

  it("should be correctly display the error message when email is not entered", async () => {
    let emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("email required!");
  });

  it("should be correctly display the error message when password is incorrect", async () => {
    let passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[1].setValue("killed");
    await wrapper.find("button").trigger("click");
    passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("invalid email");
  });

  it("should be correctly display the error message when password is not entered", async () => {
    let passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[1].setValue("");
    await wrapper.find("button").trigger("click");
    passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("password required!");
  });
});
