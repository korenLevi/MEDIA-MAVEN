import { defineNuxtPlugin } from "#app";
import modalService from "../services/modalService"; // Import the modalService you created

export default defineNuxtPlugin((nuxtApp: any) => {
  // Register $modalService globally
  nuxtApp.provide("modalService", modalService);
});
