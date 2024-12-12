import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

// const initialForm = [
//   // {
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   studentId: "",
//   //   year: "",
//   //   className: "",
//   // },
// ];
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
    console.log(form);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {form.map((student) => (
          <div key={student.studentId}>
            <Card form={form} />
          </div>
        ))}
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "381px",
          margin: "40px",
          backgroundColor: "#fff",
          boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
          borderRadius: "8px",
          padding: "30px",
        }}
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
        <button type="submit">Creat</button>
      </form>
    </div>
  );
}

export default Form;
