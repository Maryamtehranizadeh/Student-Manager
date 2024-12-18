import styles from "./Form.module.css";

function Form({ changeHandler, submitHandler, closeModal, student }) {
  // console.log(student);
  return (
    <form
      className={styles.form}
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={student?.firstName || ""}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={student?.lastName || ""}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={student?.email || ""}
      />
      <input
        type="number"
        placeholder="Student ID"
        max="999999"
        name="studentId"
        value={student?.studentId || ""}
      />
      <input
        type="number"
        placeholder="Year"
        max="99"
        name="year"
        value={student?.year || ""}
      />
      <select
        name="className"
        id="className"
        value={student.className || "none"}
      >
        <option value="none">Class Name</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Grammer">Grammer</option>
        <option value="Art">Art</option>
        <option value="Geography">Geography</option>
      </select>
      <div>
        <button style={{ marginRight: "10px" }} type="submit">
          Create / Edit
        </button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </form>
  );
}

export default Form;
