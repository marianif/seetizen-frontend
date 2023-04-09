import React, { useState } from "react";

const TIME_RANGEs = ["16-17", "17-18", "18-19", "19-20", "20-21"];

const Register = () => {
  const [registration, setRegistration] = useState({
    house: null,
    day: null,
    time: null,
    name: null,
  });
  return (
    <div>
      <form onSubmit={() => {}}>
        <label>
          Nome:
          <input
            type="text"
            value={registration.name}
            onChange={(e) =>
              setRegistration((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <label>
          Giorno:
          <select
            value={"4"}
            name="cars"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <label>
          Giorno:
          <input
            type="radio"
            value={"ciao"}
            onChange={(e) =>
              setRegistration((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
