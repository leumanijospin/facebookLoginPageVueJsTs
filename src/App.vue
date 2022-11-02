<template>
  <div
    class="md:flex md:flex-row xl:h-screen min-w-[375px] mt-4 xl:mt-0 md:justify-center md:mt-16 md:items-center md:gap-x-16 md:px-10"
  >
    <AboutFacebook />
    <FormWrapper />
  </div>
</template>

<script lang="ts">
import FormWrapper from "./components/FormWrapper.vue";
import AboutFacebook from "./components/AboutFacebook.vue";
export default {
  components: {
    FormWrapper,
    AboutFacebook,
  },
};
</script>
