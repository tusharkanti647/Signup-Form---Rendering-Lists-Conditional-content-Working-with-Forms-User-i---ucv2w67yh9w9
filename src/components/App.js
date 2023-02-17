import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [user, setUser] = useState({ name: "", email: "", gender: "male", number: "", passoword: "" });
  const [errorMessage, setEeeorMessage] = useState("");
  const [userName, setUserName] = useState("");

  const handelSubmit = () => {
    if (user.name === "" || user.email === "" || user.gender === "" || user.number === "" || user.passoword === "") {

      setEeeorMessage("All fields are mandatory");
      return;
    }
    const valitName = /^[A-Za-z ]+$/;
    if (!user.name.match(valitName)) {
      setEeeorMessage("Name is not alphanumeric");
      return;
    }

    const validEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!user.email.match(validEmail)) {
      setEeeorMessage("Email must contain @");
      return;
    } else {
      const takeUserName = user.email.split("@")[0];
      setUserName(takeUserName);
    }

    if (user.gender === "") {
      setEeeorMessage("Please identify as male, female or others");
      return;
    }

    const validNumbere = /^(0|91)?[6-9][0-9]{9}$/;
    if (!user.number.match(validNumbere)) {
      setEeeorMessage("Phone Number must contain only numbers");
      return;
    }

    if (user.passoword.length < 6) {
      setEeeorMessage("Password must contain atleast 6 letters");
      return;
    }

    setEeeorMessage("");
    setUser({
      ...user,
      name: "", email: "", gender: "male", number: "", passoword: ""
    })
    alert(`Hello ${userName}`);
  }

  return (
    <div id="main">
      <from>
        <input type="text" data-testid='name' id="name" placeholder="name" value={user.name} onChange={(event) => setUser({ ...user, name: event.target.value })} />
        <input type="email" data-testid='email' id="email" placeholder="email" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
        <select name="gender" id="gender" data-testid='gender' value={user.gender} onChange={(event) => setUser({ ...user, gender: event.target.value })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <input type="text" data-testid='phoneNumber' id="phoneNumber" placeholder="phoneNumber" value={user.number} onChange={(event) => setUser({ ...user, number: event.target.value })} />
        <input type="password" data-testid='password' id="password" placeholder="passoword" value={user.passoword} onChange={(event) => setUser({ ...user, passoword: event.target.value })} />
        <button type="submit" data-testid='submit' onClick={handelSubmit}>submit</button>
      </from>

      <div id="error">{errorMessage}</div>
    </div>
  )
}


export default App;
