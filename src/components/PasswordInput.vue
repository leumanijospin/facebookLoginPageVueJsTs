<template>
  <div>
    <input
      :class="[
        'border border-solid rounded-md text-[17px] border-[#dddfe2] text-[#1d2129] h-[52px]  font-[Helvetica] w-full px-3.5',
        error
          ? 'focus:outline-none border-red-500'
          : 'focus:outline outline-[#1877f2] caret-blue-600',
      ]"
      type="password"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      required
    />
    <span class="text-red-500 text-xs" v-if="error"> {{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "PasswordInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
};
</script>
