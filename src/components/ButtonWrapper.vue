<template>
  <button
    type="submit"
    class="h-12 w-full rounded-md font-bold font-[Helvetica] text-white text-center border-none antialiased"
  >
    {{ name }}
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonWrapper",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
