<template>
  <div>
    <div class="task-list">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @edit="editTask"
        @delete="removeTask"
        @toggle="toggleTaskCompletion"
      />
    </div>
    <button
      @click="addNewTask"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 ml-3 rounded"
    >
      Add Task
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "../types/task";
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

const tasks = ref<Task[]>(getAllTasks()); 

function addNewTask() {
  const newTask: Task = {
    id: 0, 
    title: "New Task",
    description: "Description of the new task",
    completed: false,
  };
  addTask(newTask); 
  tasks.value = getAllTasks(); 
}

function editTask(updatedTask: Task) {
  updateTask(updatedTask); 
  tasks.value = getAllTasks(); 
}

function removeTask(taskId: number) {
  deleteTask(taskId); 
  tasks.value = getAllTasks(); 
}

function toggleTaskCompletion(task: Task) {
  task.completed = !task.completed; 
  updateTask(task); 
  tasks.value = getAllTasks(); 
}
</script>
