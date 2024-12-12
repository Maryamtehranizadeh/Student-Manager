import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { toast } from "react-hot-toast";

const initialClasses = [
  "Mathematics",
  "Science",
  "Art",
  "Grammer",
  "History",
  "Geography",
];

function Sidebar() {
  const [editModal, setEditModal] = useState(false);
  const [newCourse, setNewCourse] = useState("");
  const [inputModal, setInputModal] = useState(false);
  const [classes, setClasses] = useState(initialClasses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classToDelete, setClassToDelete] = useState(null);

  const deleteHandler = () => {
    setClasses((prevClasses) =>
      prevClasses.filter((course) => course !== classToDelete)
    );
    setIsModalOpen(false);
    setClassToDelete(null);
  };

  const openModal = (course) => {
    setClassToDelete(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditModal(false);
    setIsModalOpen(false);
    setInputModal(false);
    setClassToDelete(null);
  };

  const editHandler = (course) => {
    console.log(`Editing: ${course}`);
    setClassToDelete(course);
    setEditModal(true);
  };
  const createHandler = () => {
    setInputModal(true);
  };

  const addCourseHandler = () => {
    if (!newCourse) return toast.error("Please enter a new Class!");
    console.log(newCourse);
    setClasses((prevClasses) => [...prevClasses, newCourse]);
    console.log(classes);
    setNewCourse("");
    setInputModal(false);
  };

  const editCourseHandler = () => {
    if (!newCourse) return toast.error("Please enter the edited Class name!");
    setClasses((prevClasses) =>
      prevClasses.filter((course) => course !== classToDelete)
    );
    setClassToDelete(null);
    setClasses((prevClasses) => [...prevClasses, newCourse]);
    setNewCourse("");
    setEditModal(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
        borderRadius: "15px",
        padding: "60px",
        height: "fit-content",
        color: "grey",
        font: "0.8rem",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((course) => (
            <tr key={course}>
              <td>{course}</td>
              <td>
                <img
                  src="/edit.png"
                  alt="Edit"
                  style={{ cursor: "pointer", marginRight: "10px" }}
                  onClick={() => editHandler(course)}
                />
                <img
                  src="/delete.png"
                  alt="Delete"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(course)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        style={{ width: "100%", marginTop: "15px" }}
        onClick={createHandler}
      >
        Create New Class
      </button>

      {isModalOpen && (
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
            <h4>Are you sure you want to delete {classToDelete}?</h4>
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
      {inputModal && (
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
            <h4>Please Enter a new class!</h4>
            <input
              type="text"
              placeholder="Class Name"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
            />
            <div>
              <button
                style={{ marginRight: "10px" }}
                onClick={addCourseHandler}
              >
                Create
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
            <h4>Please Edit the class!</h4>
            <input
              type="text"
              placeholder="Correct Class Name"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
            />
            <div>
              <button
                style={{ marginRight: "10px" }}
                onClick={editCourseHandler}
              >
                Edit
              </button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
