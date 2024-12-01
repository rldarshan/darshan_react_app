import { useState } from "react";
import "./styles.css";

export default function App() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <div className="container d-grid justify-content-center">
      <br></br>

      <div className="form">
        <div className="d-flex">
          <label>
            Name:
            <input value={person.name} onChange={handleNameChange} />
          </label>
          {!person.name.trim().length && <span className="error">Name is required</span>}
        </div>

        <div className="d-flex">
          <label>
            Title:
            <input value={person.artwork.title} onChange={handleTitleChange} />
          </label>
          {!person.artwork.title.trim().length && <span className="error">Title is required</span>}
          </div>

        <div className="d-flex">
          <label>
            City:
            <input value={person.artwork.city} onChange={handleCityChange} />
          </label>
          {!person.artwork.city.trim().length && <span className="error">City is required</span>}
          </div>

        <div className="d-flex">
          <label>
            Image:
            <input value={person.artwork.image} onChange={handleImageChange} />
          </label>
        </div>
      </div>

      <br></br>
      <div>
        <p>
          <i>{person.artwork.title}</i>
          {" by "}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </div>
  );
}
