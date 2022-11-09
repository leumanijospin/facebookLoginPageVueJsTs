<template>
  <div class="flex flex-col justify-center gap-y-6 p-4">
    <form
      class="flex flex-col gap-y-3 bg-white w-full shadow-md rounded-lg p-4 max-w-[396px] mx-auto"
    >
      <EmailInput
        placeholder="Adresse e-mail ou numéro de tél."
        :required="true"
        v-model="user.email"
        :error="emailError"
      />
      <PasswordInput
        placeholder="Mot de passe"
        v-model="user.password"
        :error="passwordError"
      />
      <ButtonWrapper
        name="Se connecter"
        class="text-[20px] bg-[#1877f2] mt-1"
        @click.prevent="login"
      />
      <ForgetPasswordOrSignUp />
    </form>
    <NewFacebookPage />
  </div>
</template>

<script lang="ts">
import ButtonWrapper from "./ButtonWrapper.vue";
import EmailInput from "./EmailInput.vue";
import PasswordInput from "./PasswordInput.vue";
import ForgetPasswordOrSignUp from "./ForgetPasswordOrSignUp.vue";
import NewFacebookPage from "./NewFacebookPage.vue";
import { isEmailValid } from "../utils/emailLogin";
import type { Data } from "../utils/type";
export default {
  name: "FormWrapper",
  components: {
    ButtonWrapper,
    EmailInput,
    PasswordInput,
    NewFacebookPage,
    ForgetPasswordOrSignUp,
  },
  data(): Data {
    return {
      user: {
        email: "",
        password: "",
      },
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    login(): void {
      if (isEmailValid(this.user.email)) {
        this.emailError = "";
      } else if (this.user.email.length === 0) {
        this.emailError = "email required!";
      } else {
        this.emailError = "please, your email is incorrect!";
      }

      if (this.user.password === "bonjour") {
        this.passwordError = "";
      } else if (this.user.password.length === 0) {
        this.passwordError = "password required!";
      } else {
        this.passwordError = "invalid password";
      }

      if (isEmailValid(this.user.email) && this.user.password === "bonjour") {
        alert("successful connection");
      }
    },
  },
};
</script>
