import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import styles from "./Manager.module.css";
import Form from "./Form";
import Title from "./Title";

const firstStudents = [
  {
    className: "Mathematics",
    firstName: "Alex",
    lastName: "Smith",
    email: "alex@smith.com",
    studentId: "111111",
    year: "1",
  },
  {
    className: "Geography",
    firstName: "Bob",
    lastName: "Doe",
    email: "Bob@Doe.com",
    studentId: "222222",
    year: "2",
  },
  {
    className: "Grammer",
    firstName: "Rayan",
    lastName: "Green",
    email: "rayan@green.com",
    studentId: "444444",
    year: "4",
  },
];

function Manager() {
  const [form, setForm] = useState(firstStudents);
  const [student, setStudent] = useState({});
  const [formModal, setFormModal] = useState(false);

  const changeHandler = (e) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }));
  };
  const openModal = () => {
    setFormModal(true);
  };
  const closeModal = () => {
    setFormModal(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!student.firstName)
      return toast.error("Please enter a valid First Name!");
    if (!student.lastName)
      return toast.error("Please enter a valid Last Name!");
    if (!student.email) return toast.error("Please enter a valid Email!");
    if (!student.studentId || student.studentId > 999999)
      return toast.error("Please enter a valid student ID!");
    if (!student.year || student.year > 99)
      return toast.error("Please enter a valid year!");
    if (student.className === "none")
      return toast.error("Please enter a valid Class Name!");
    console.log(student);
    setForm((prevForm) => [...prevForm, student]);
    setStudent({});
    closeModal();
  };
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Title />
        <h3>
          <button onClick={openModal}>Add New Students Here</button>
        </h3>
      </div>

      {formModal && (
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
      <div className={styles.twins}>
        <div className={styles.cards}>
          {form.map((student) => (
            <div key={student.studentId}>
              <Card student={student} form={form} setForm={setForm} />
            </div>
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Manager;
