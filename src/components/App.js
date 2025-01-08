import { useState } from "react";
import "../styles/styles.scss";

export function App() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    password: "",
  });
  const url = "https://nodejs-app-dxou.onrender.com"; // 'http://localhost:4000/';

  function fetchData() {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function postData() {
    if (
      person.password.trim().length &&
      person.email.trim().length &&
      person.name.trim().length
    ) {
      fetch(`${url}/register`, {
        method: "POST",
        headers: {
          // 'Authorization': 'Bearer YOUR_JWT_TOKEN', // Replace with your JWT token
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }

    setPerson({
      name: "",
      email: "",
      password: "",
    });
  }

  function login() {
    if (person.password.trim().length && person.email.trim().length) {
      fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }

    setPerson({
      name: "",
      email: "",
      password: "",
    });
  }

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  function handlePasswordChange(e) {
    setPerson({
      ...person,
      password: e.target.value,
    });
  }

  // function handleImageChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       image: e.target.value,
  //     },
  //   });
  // }

  return (
    <div className="container d-grid justify-content-center">
      <br />
      <div className="form">
        <div className="d-flex">
          <label>
            Name:
            <input value={person.name} onChange={handleNameChange} />
          </label>
          {!person.name.trim().length && (
            <span className="error">Name is required</span>
          )}
        </div>

        <div className="d-flex">
          <label>
            Email:
            <input value={person.email} onChange={handleEmailChange} />
          </label>
          {!person.email.trim().length && (
            <span className="error">Email is required</span>
          )}
        </div>

        <div className="d-flex">
          <label>
            Password:
            <input value={person.password} onChange={handlePasswordChange} />
          </label>
          {!person.password.trim().length && (
            <span className="error">Password is required</span>
          )}
        </div>

        {/* <div className="d-flex">
          <label>
            Image:
            <input value={person.artwork.image} onChange={handleImageChange} />
          </label>
        </div> */}
      </div>

      <div>
        {/* <p>
          <i>{person.email}</i>
          {" by "}
          {person.name}
          <br />
          (located in {person.password})
        </p>
        <img src={person.artwork.image} alt={person.email} /> */}
        <br></br>
        <br></br>
        <div style={{ display: "inline-flex", gap: "20px" }}>
          <button className="btn btn-primary" onClick={fetchData}>
            Fetch Data
          </button>
          <br></br>
          <button className="btn btn-warning" onClick={postData}>
            Post Data
          </button>
          <br></br>
          <button className="btn btn-danger" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export function BtnComponent({ handleClick }) {
  const cmp_btn = {
    width: "191px",
    height: "45px",
    lineHeight: "14px",
  };

  return (
    <button className="btn btn-primary" style={cmp_btn} onClick={handleClick}>
      Component Interaction
    </button>
  );
}
