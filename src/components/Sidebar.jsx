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
      prevClasses.map((course) =>
        course === classToDelete ? newCourse : course
      )
    );
    setNewCourse("");
    setEditModal(false);
  };

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((course) => (
            <tr key={course}>
              <td style={{ marginRight: "60px" }}>{course}</td>
              <td>
                <img
                  src="/edit.png"
                  alt="Edit"
                  style={{ cursor: "pointer", marginRight: "30px" }}
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
        style={{ width: "100%", marginTop: "15px", marginTop: "30px" }}
        onClick={createHandler}
      >
        Create New Class
      </button>

      {isModalOpen && (
        <div className={styles.backmodal}>
          <div className={styles.modal}>
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
        <div className={styles.backmodal}>
          <div className={styles.modal}>
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
        <div className={styles.backmodal}>
          <div className={styles.modal}>
            <h4>Please edit the class {classToDelete}!</h4>
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
