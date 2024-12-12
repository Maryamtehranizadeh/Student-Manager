import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import styles from "./Manager.module.css";
import Form from "./Form";

function Manager() {
  const [form, setForm] = useState([]);
  const [student, setStudent] = useState({});

  const changeHandler = (e) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }));
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
  };
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className={styles.main}>
      <Form
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        form={form}
        setForm={setForm}
        student={student}
        setStudent={setStudent}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {form.map((student) => (
          <div key={student.studentId}>
            <Card
              student={student}
              form={form}
              setForm={setForm}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
}

export default Manager;
