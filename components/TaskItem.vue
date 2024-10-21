<template>
  <div class="flex items-center justify-between p-4 border-b border-gray-200">
    <div
      @click="toggleCompleted"
      :class="['cursor-pointer', task.completed ? 'line-through' : '']"
    >
      {{ task.title }}
    </div>

    <div class="flex space-x-2">
      <button @click="editTask" class="text-blue-500">Edit</button>
      <button @click="removeTask" class="text-red-500">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, h } from "vue";
import modalService from "../services/modalService";
import type { Task } from "../types/task";

const props = defineProps<{ task: Task }>();
const emits = defineEmits(["edit", "delete", "toggle"]);

function editTask() {
  const taskCopy = { ...props.task };

  modalService.open({
    title: "Edit Task",
    content: [
      h("input", {
        value: taskCopy.title,
        onInput: (e: Event) => {
          const target = e.target as HTMLInputElement;
          taskCopy.title = target.value;
        },
        placeholder: "Task Title",
        class: "mb-2 p-6 border",
      }),
      h("textarea", {
        value: taskCopy.description,
        onInput: (e: Event) => {
          const target = e.target as HTMLTextAreaElement;
          taskCopy.description = target.value;
        },
        placeholder: "Task Description",
        class: "p-4 border",
      }),
    ],
    onSubmit: () => {
      emits("edit", taskCopy); 
    },
    onClose: () => {
      console.log("Edit modal closed");
    },
  });
}

function removeTask() {
  emits("delete", props.task.id);
}

function toggleCompleted() {
  emits("toggle", props.task);
}
</script>
