import { useState } from "react";
import styles from "./Card.module.css";
import Form from "./Form";

function Card({ student, form, setForm }) {
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

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitHandler = (e) => {
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
    <div style={{ margin: "10px" }}>
      <div className={styles.card}>
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
        <div className={styles.backmodal}>
          <div className={styles.modal}>
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
        <div className={styles.backmodal}>
          <div className={styles.modal}>
            <Form
              changeHandler={changeHandler}
              submitHandler={submitHandler}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
