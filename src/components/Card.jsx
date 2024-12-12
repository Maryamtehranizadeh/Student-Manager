import { getCookie } from "../utils/cookie";
import { baseURL } from "../utils/api";
import axios from "axios";
import { useState } from "react";

function Card({ student, form, setForm, changeHandler, submitHandler }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [editForm, setEditForm] = useState({});

  const openModal = (id) => {
    setStudentToDelete(id);
    setDeleteModal(true);
  };

  const deleteHandler = () => {
    console.log("delete");
    setForm((prevForm) =>
      prevForm.filter((student) => student.studentId !== studentToDelete)
    );
    setDeleteModal(false);
  };

  const closeModal = () => {
    setDeleteModal(false);
    setStudentToDelete(null);
    setEditModal(false);
  };

  const editHandler = (id) => {
    const studentToEdit = form.find((student) => student.studentId === id);
    setEditForm(studentToEdit);
    setStudentToDelete(id);
    setEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const editStudentHandler = (e) => {
    e.preventDefault();
    setForm((prevForm) =>
      prevForm.map((student) =>
        student.studentId === studentToDelete ? editForm : student
      )
    );
    setStudentToDelete(null);
    setEditModal(false);
  };

  return (
    <div>
      <div
        style={{
          width: "425px",
          height: "161px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
          borderRadius: "15px",
          padding: "0 20px",
        }}
      >
        <img
          src="/photo.jpg"
          alt="Student Photo"
          style={{ height: "90px", width: "90px" }}
        />
        <div>
          <h4>
            {student.firstName} {student.lastName}
          </h4>
          <p> {student.email}</p>
          <span style={{ color: "silver" }}>ID: {student.studentId}</span>
        </div>
        <div>
          <img
            src="/edit.png"
            alt="Edit"
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={() => editHandler(student.studentId)}
          />
          <img
            src="/delete.png"
            alt="Delete"
            style={{ cursor: "pointer" }}
            onClick={() => openModal(student.studentId)}
          />
        </div>
      </div>

      {deleteModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p>Are you sure you want to delete?</p>
            <div>
              <button
                onClick={deleteHandler}
                style={{
                  margin: "0 10px",
                }}
              >
                Yes, Delete
              </button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {editModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "381px",
                height: "fit-content",
                backgroundColor: "#fff",
                boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
                borderRadius: "15px",
                padding: "30px",
              }}
              onChange={handleInputChange}
              onSubmit={editStudentHandler}
            >
              <h4>Please edit the student information</h4>
              <input type="text" placeholder="First Name" name="firstName" />
              <input type="text" placeholder="Last Name" name="lastName" />
              <input type="email" placeholder="Email" name="email" />
              <input
                type="number"
                placeholder="Student ID"
                max="999999"
                name="studentId"
              />
              <input type="number" placeholder="Year" max="99" name="year" />
              <select name="className" id="className">
                <option value="none">Class Name</option>
                <option name="mathematics">Mathematics</option>
                <option name="science">Science</option>
                <option name="history">History</option>
                <option name="grammer">Grammer</option>
                <option name="art">Art</option>
                <option name="geography">Geography</option>
              </select>
              <div>
                <button style={{ marginRight: "10px" }} type="submit">
                  Edit
                </button>
                <button>Delete</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
