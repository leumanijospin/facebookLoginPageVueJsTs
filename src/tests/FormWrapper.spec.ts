import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
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

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain the awaited ButtonWrapper", () => {
    const buttonWrapper = wrapper.findComponent(ButtonWrapper);
    expect(buttonWrapper.exists()).toBe(true);
    expect(buttonWrapper.props().name).toBe("Se connecter");
  });

  it("should contain the awaited EmailInput", async () => {
    const emailInput = wrapper.findComponent(EmailInput);
    expect(emailInput.exists()).toBe(true);
    expect(emailInput.props().placeholder).toBe(
      "Adresse e-mail ou numéro de tél."
    );
    expect(emailInput.props().required).toBe(true);
    expect(emailInput.props().error).toBe("");
  });

  it("should contain the awaited PasswordInput", () => {
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

  it("should correctly display the error message when email is invalid", async () => {
    let emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("lao");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("please, your email is incorrect!");
  });

  it("should display the error message when email is not entered", async () => {
    let emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test='emailError']");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("email required!");
  });

  it("should display the error message when password is incorrect", async () => {
    let passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[1].setValue("killed");
    await wrapper.find("button").trigger("click");
    passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("invalid password");
  });

  it("should display the error message when password is not entered", async () => {
    let passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[1].setValue("");
    await wrapper.find("button").trigger("click");
    passwordErrorMessage = wrapper.find("[data-test='passwordError']");
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("password required!");
  });

  it("should display the error message when password and email are not entered", async () => {
    let emailErrorMessage = wrapper.find("[data-test=emailError]");
    expect(emailErrorMessage.exists()).toBe(false);
    let passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("");
    await wrapper.findAll("input")[1].setValue("");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test=emailError]");
    passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("email required!");
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("password required!");
  });

  it("should display the error message when password and email are invalid", async () => {
    let emailErrorMessage = wrapper.find("[data-test=emailError]");
    expect(emailErrorMessage.exists()).toBe(false);
    let passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("test");
    await wrapper.findAll("input")[1].setValue("pass");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test=emailError]");
    passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("please, your email is incorrect!");
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("invalid password");
  });

  it("should display the error message when email is invalid with password is valid", async () => {
    let emailErrorMessage = wrapper.find("[data-test=emailError]");
    expect(emailErrorMessage.exists()).toBe(false);
    let passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("test@gmail");
    await wrapper.findAll("input")[1].setValue("bonjour");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test=emailError]");
    passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("please, your email is incorrect!");
    expect(passwordErrorMessage.exists()).toBe(false);
  });

  it("should display the error message when email is not entered with password is valid", async () => {
    let emailErrorMessage = wrapper.find("[data-test=emailError]");
    expect(emailErrorMessage.exists()).toBe(false);
    let passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("");
    await wrapper.findAll("input")[1].setValue("bonjour");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test=emailError]");
    passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(emailErrorMessage.exists()).toBe(true);
    expect(emailErrorMessage.text()).toBe("email required!");
    expect(passwordErrorMessage.exists()).toBe(false);
  });

  it("should display the error message when password is invalid with email is valid", async () => {
    let emailErrorMessage = wrapper.find("[data-test=emailError]");
    expect(emailErrorMessage.exists()).toBe(false);
    let passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("test@gmail.com");
    await wrapper.findAll("input")[1].setValue("pass");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test=emailError]");
    passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(emailErrorMessage.exists()).toBe(false);
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("invalid password");
  });

  it("should display the error message when password is not entered with email is valid", async () => {
    let emailErrorMessage = wrapper.find("[data-test=emailError]");
    expect(emailErrorMessage.exists()).toBe(false);
    let passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(passwordErrorMessage.exists()).toBe(false);
    await wrapper.findAll("input")[0].setValue("test@gmail.com");
    await wrapper.findAll("input")[1].setValue("");
    await wrapper.find("button").trigger("click");
    emailErrorMessage = wrapper.find("[data-test=emailError]");
    passwordErrorMessage = wrapper.find("[data-test=passwordError]");
    expect(emailErrorMessage.exists()).toBe(false);
    expect(passwordErrorMessage.exists()).toBe(true);
    expect(passwordErrorMessage.text()).toBe("password required!");
  });

  it("should display an alert message when the user information is correct", async () => {
    window.alert = vi.fn();
    const wrapper = mount(FormWrapper);
    await wrapper.findAll("input")[0].setValue("example@gmail.com");
    await wrapper.findAll("input")[1].setValue("bonjour");
    await wrapper.find("button").trigger("click");
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("successful connection");
  });
});
