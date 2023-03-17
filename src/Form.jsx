import React, { useState } from "react";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const userFullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitDataHandler = (e) => {
    e.preventDefault();

    const allUserInfo = {
      id: Math.random(Math.floor() * 1000),
      userName,
      fullName,
      age,
    };

    setUserInfo((data) => {
      return [...data, allUserInfo];
    });
    setFullName("");
    setUserName("");
    setAge("");
  };

  return (
    <div>
      <form>
        <label htmlFor="userName">Username: </label>
        <input
          type="text"
          placeholder="UserName"
          id="userName"
          name="userName"
          value={userName}
          onChange={userNameChangeHandler}
        />
        <br />
        <label htmlFor="FullName">FullName: </label>
        <input
          type="text"
          placeholder="FullName"
          id="FullName"
          name="FullName"
          value={fullName}
          onChange={userFullNameChangeHandler}
        />
        <br />
        <label htmlFor="age">age: </label>
        <input
          type="text"
          placeholder="age"
          id="age"
          name="age"
          value={age}
          onChange={userAgeChangeHandler}
        />
        <button type="submit" onClick={submitDataHandler}>
          Submit
        </button>
      </form>
      <ul>
        {userInfo.map((data) => {
          return (
            <div key={data.id}>
              <li>UserName: {data.userName}</li>
              <li>fullName: {data.fullName}</li>
              <li>Age: {data.age}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
