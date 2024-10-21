<template>
  <teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded shadow-lg">
        <h2 class="text-xl mb-4">{{ title }}</h2>
        <div class="flex p-6 flex-col">
          <slot></slot>
        </div>
        <div class="mt-4 flex justify-end space-x-2">
          <button
            @click="close"
            class="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Close
          </button>
          <button
            @click="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  visible: Boolean,
  title: String,
});
const emits = defineEmits(["close", "submit"]);

function close() {
  emits("close");
}

function submit() {
  emits("submit");
}
</script>
