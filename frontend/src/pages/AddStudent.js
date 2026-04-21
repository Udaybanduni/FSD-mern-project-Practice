import { useState } from "react";
import { createStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: ""
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(form);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
          required
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;