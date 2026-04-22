const API_URL = "https://fsd-mern-project-practice.onrender.com/api/students";

// Helper to get token
const getToken = () => localStorage.getItem("token");

// GET all students
export const getStudents = async () => {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: getToken()
    }
  });
  return res.json();
};

// CREATE student
export const createStudent = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken()
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
      "Content-Type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

// DELETE student
export const deleteStudent = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: getToken()
    }
  });
  return res.json();
};