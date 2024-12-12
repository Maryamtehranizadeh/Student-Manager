import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import styles from "./Form.module.css";

function Form() {
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
      <form
        className={styles.form}
        onChange={changeHandler}
        onSubmit={submitHandler}
      >
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
        <button type="submit">Create</button>
      </form>
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

export default Form;
