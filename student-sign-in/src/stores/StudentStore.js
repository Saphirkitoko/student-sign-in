import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {
    // Initialize reactive data with ref()
    const studentList = ref([
        { name: "A. Student", starID: "aa1234aa", present: false },
        { name: "B. Student", starID: "bb1234bb", present: false }
    ])

    const mostRecentStudent = ref({})

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter(student => studentToDelete !== student)
    }

    function arrivedOrLeft(student) {
        const studentToModifyIndex = studentList.value.findIndex(s => s.starID === student.starID)
        if (studentToModifyIndex !== -1) {
            mostRecentStudent.value = student
            studentList.value[studentToModifyIndex] = student
        }
    }

    // Sort the student list
    const sortedStudents = computed(() => {
        return studentList.value.slice().sort((s1, s2) => s1.name.localeCompare(s2.name))
    })

    // Compute the count of students
    const studentCount = computed(() => {
        return studentList.value.length
    })

    return {
        // Reactive data
        studentList,
        mostRecentStudent,

        // Functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // Computed properties
        sortedStudents,
        studentCount
    }
})
