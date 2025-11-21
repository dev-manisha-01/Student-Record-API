const apiUrl = "http://localhost:5000/students"; // backend API URL

document.addEventListener("DOMContentLoaded", fetchStudents);

const form = document.getElementById("studentForm");
const studentIdInput = document.getElementById("studentId");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    age: document.getElementById("age").value,
    city: document.getElementById("city").value
  };

  try {
    // Update student if editing
    if (studentIdInput.value) {
      await fetch(`${apiUrl}/${studentIdInput.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });
      submitBtn.textContent = "Add Student";
      cancelEditBtn.style.display = "none";
    } else {
      // Add new student
      await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });
    }

    form.reset();
    studentIdInput.value = "";
    fetchStudents();
  } catch (err) {
    alert("Error saving student: " + err.message);
  }
});

// Cancel editing
cancelEditBtn.addEventListener("click", () => {
  form.reset();
  studentIdInput.value = "";
  submitBtn.textContent = "Add Student";
  cancelEditBtn.style.display = "none";
});

async function fetchStudents() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const studentsList = document.getElementById("studentsList");
    studentsList.innerHTML = "";

    if (!data.data || data.data.length === 0) {
      studentsList.innerHTML = "<p>No students found.</p>";
      return;
    }

    data.data.forEach(student => {
      const card = document.createElement("div");
      card.classList.add("student-card");
      card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Course: ${student.course}</p>
        <p>Age: ${student.age}</p>
        <p>City: ${student.city}</p>
        <div class="action-btns">
          <button class="edit-btn" onclick="editStudent('${student._id}', '${student.name}', '${student.course}', '${student.age}', '${student.city}')">Edit</button>
          <button class="delete-btn" onclick="deleteStudent('${student._id}')">Delete</button>
        </div>
      `;
      studentsList.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching students:", err);
  }
}

async function deleteStudent(id) {
  if (!confirm("Are you sure you want to delete this student?")) return;
  try {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchStudents();
  } catch (err) {
    alert("Error deleting student: " + err.message);
  }
}

function editStudent(id, name, course, age, city) {
  document.getElementById("name").value = name;
  document.getElementById("course").value = course;
  document.getElementById("age").value = age;
  document.getElementById("city").value = city;
  studentIdInput.value = id;
  submitBtn.textContent = "Update Student";
  cancelEditBtn.style.display = "inline-block";
}
