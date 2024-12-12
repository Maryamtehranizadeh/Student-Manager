import { getCookie } from "../utils/cookie";
import { baseURL } from "../utils/api";
import axios from "axios";
import { useState } from "react";

function Card({ form }) {
  const editHandler = (id) => {
    console.log("edit");
  };

  const createHandler = () => {
    console.log("create");
  };

  const deleteHandler = (id) => {
    console.log("delete");
  };

  return (
    <div>
      {/* <div
        style={{
          textAlign: "center",
          width: "425px",
          height: "161px",
          backgroundColor: "#fff",
          boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
          borderRadius: "15px",
          margin: "40px",
        }}
      >
        <h4>Student with ID: {form.studentId} no longer exists!</h4>
        <button onClick={createHandler}>Create a new Student Card</button>
      </div> */}
      {/* <div
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
          margin: "40px",
        }}
      >
        <img
          src="/photo.jpg"
          alt="Student Photo"
          style={{ height: "90px", width: "90px" }}
        />
        <div>
          <h4>
            {form.firstName} {form.lastName}
          </h4>
          <p> {form.email}</p>
          <span style={{ color: "silver" }}>ID: {form.studentId}</span>
        </div>
        <div>
          <img
            src="/edit.png"
            alt="Edit"
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={() => editHandler(form.studentId)}
          />
          <img
            src="/delete.png"
            alt="Delete"
            style={{ cursor: "pointer" }}
            onClick={() => deleteHandler(form.studentId)}
          />
        </div>
      </div> */}
    </div>
  );
}

export default Card;
