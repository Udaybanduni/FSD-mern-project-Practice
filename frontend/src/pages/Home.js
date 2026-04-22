import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Protect page (redirect if not logged in)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchData();
    }
  }, []);

  // Fetch students
  const fetchData = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  // Delete student
  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchData();
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>All Students</h2>

      {/* Logout */}
      <button onClick={handleLogout}>Logout</button>

      <br /><br />

      {/* Add Button */}
      <button onClick={() => navigate("/add")}>
        Add Student
      </button>

      {/* Search Input */}
      <br /><br />
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Student List */}
      <ul>
        {students
          .filter((s) =>
            s.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((s) => (
            <li key={s._id}>
              {s.name} - {s.age} - {s.course}

              <button onClick={() => navigate(`/edit/${s._id}`)}>
                Edit
              </button>

              <button onClick={() => handleDelete(s._id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;