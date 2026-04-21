const API_URL = "https://fsd-mern-project-practice.onrender.com/api/students";

// GET all students
export const getStudents = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// CREATE student
export const createStudent = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

// UPDATE student
export const updateStudent = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

// DELETE student
export const deleteStudent = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  return res.json();
};