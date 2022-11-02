<template>
  <div class="flex flex-col">
    <input
      :class="[
        'border border-solid rounded-md text-[17px] text-[#1d2129] h-[52px] font-[Helvetica] w-full px-3.5',
        error
          ? 'focus:outline-none border-red-500 caret-black'
          : 'focus:outline outline-[#1877f2] border-[#dddfe2] caret-blue-600',
      ]"
      type="email"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :required="required"
    />
    <span class="text-red-500 text-xs" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "EmailInput",
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
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
};
</script>
