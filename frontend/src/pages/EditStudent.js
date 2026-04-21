import { useState, useEffect } from "react";
import { updateStudent, getStudents } from "../services/studentService";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Load student data
  useEffect(() => {
    const fetchStudent = async () => {
      const data = await getStudents();
      const student = data.find((s) => s._id === id);
      if (student) setForm(student);
    };

    fetchStudent();
  }, [id]);

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, form);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          value={form.course}
          onChange={handleChange}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;