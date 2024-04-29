<script setup>
import StudentRow from './StudentRow.vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStudentStore } from '../stores/StudentStore.js'

// Get the student store and reactive references to store state
const studentStore = useStudentStore()
const { sortedStudents, studentCount } = storeToRefs(studentStore)

// Function to handle student arrival or departure
const arrivedOrLeft = (student, isStudentPresent) => {
  student.present = isStudentPresent
  studentStore.arrivedOrLeft(student)
}

// Function to delete a student
const deleteStudent = (student) => {
  studentStore.deleteStudent(student)
}

// Computed property for plural student message
const pluralStudentMessage = computed(() => {
  if (studentCount.value === 1) {
    return 'There is 1 student in class.'
  } else {
    return `There are ${studentCount.value} students in class.`
  }
})
</script>

<template>
  <div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5 class="card-subtitle text-muted">{{ pluralStudentMessage }}</h5>
    <div id="student-table">
      <table class="table">
        <thead>
        <tr class="align-middle">
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <!-- Loop over sortedStudents and pass each student to StudentRow component -->
        <StudentRow
            v-for="student in sortedStudents"
            :key="student.starID"
            :student="student"
            @delete-student="deleteStudent"
            @arrived-or-left="arrivedOrLeft"
        ></StudentRow>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
#student-table {
  max-height: 500px;
  overflow: scroll;
}

th, td {
  width: 25%;
  text-align: center;
}
</style>
