import styles from "./Form.module.css";

function Form({
  changeHandler,
  submitHandler,
  form,
  setForm,
  student,
  setStudent,
}) {
  return (
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
  );
}

export default Form;
