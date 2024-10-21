import { Task } from "../types/task";

const STORAGE_KEY = "tasks";

export function getAllTasks(): Task[] {
  if (!window || !window.localStorage) return [];
  const storedTasks = window.localStorage.getItem(STORAGE_KEY);
  if (storedTasks) {
    return JSON.parse(storedTasks) as Task[];
  } else {
    return [
      {
        id: 1,
        title: "Complete project setup",
        description:
          "Set up the Nuxt project with Tailwind and TypeScript integration.",
        completed: false,
      },
      {
        id: 2,
        title: "Implement task management",
        description:
          "Build out task addition, editing, and deletion functionality.",
        completed: false,
      },
      {
        id: 3,
        title: "Design task UI",
        description: "Create a clean UI for displaying and managing tasks.",
        completed: true,
      },
      {
        id: 4,
        title: "API Integration",
        description: "Connect the app to an API to load and save tasks.",
        completed: false,
      },
      {
        id: 5,
        title: "Error Handling",
        description: "Implement proper error handling for API calls.",
        completed: true,
      },
      {
        id: 6,
        title: "Responsive Design",
        description:
          "Ensure the app looks good on mobile, tablet, and desktop.",
        completed: false,
      },
      {
        id: 7,
        title: "Add task details modal",
        description:
          "Create a modal to show detailed information about each task.",
        completed: true,
      },
      {
        id: 8,
        title: "User Authentication",
        description:
          "Set up authentication to manage users and tasks securely.",
        completed: false,
      },
      {
        id: 9,
        title: "Testing",
        description:
          "Write unit and integration tests for the task management features.",
        completed: false,
      },
      {
        id: 10,
        title: "Deploy the app",
        description:
          "Deploy the app to a hosting service like Vercel or Netlify.",
        completed: false,
      },
    ];
  }
}

export function addTask(newTask: Task): void {
  const tasks = getAllTasks();
  newTask.id = Date.now();
  tasks.push(newTask);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  console.log("Task added");
}

export function updateTask(updatedTask: Task): void {
  const tasks = getAllTasks();
  const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    console.log("Task updated");
  }
}

export function deleteTask(taskId: number): void {
  const tasks = getAllTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  console.log("Task removed");
}
