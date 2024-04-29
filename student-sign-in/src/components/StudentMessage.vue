<script setup>
import { useStudentStore } from '../stores/StudentStore.js'
import { storeToRefs } from 'pinia'

// Get the student store
const studentStore = useStudentStore()

// Get reactive references to store state
const { mostRecentStudent } = storeToRefs(studentStore)
</script>

<template>
  <div id="welcome-or-goodbye-message" class="m-2">
    <div v-if="mostRecentStudent.name">
      <div v-if="mostRecentStudent.present" class="alert alert-success">
        Welcome, {{ mostRecentStudent.name }}!
      </div>
      <div v-else class="alert alert-info">
        Goodbye, {{ mostRecentStudent.name }}. See you later!
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for the component */
#welcome-or-goodbye-message {
  margin: 1rem 0;
}

/* Styles for alerts */
.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
</style>

