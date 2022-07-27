import { useState } from "react";
import Card from "./card";
import Input from "./input";

export default function Form() {
  // console.log(dataArray);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [dataArray, setDataArray] = useState([]);

  console.log("dataArray :>> ", dataArray);

  const submitHandler = () => {
    if (!firstName) {
      alert("Enter first name");
    } else if (!lastName) {
      alert("Enter last name");
    } else if (!email) {
      alert("Enter email");
    } else if (!age) {
      alert("Enter age");
    } else if (!password) {
      alert("Enter Password");
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        password: password
      };
      const temp = [...dataArray];
      temp.unshift(data);
      setDataArray(temp);
    }
  };
  
  return (
    <div className="container main-parent-div">
      <div className="parent-div">
        <h1 className="sign-up">Sign UP</h1>
        <Input
          type="text"
          placeHolder="Enter first Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          inputName="First Name"
        />
        <Input
          type="text"
          placeHolder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          inputName="Last Name"
        />
        <Input
          type="text"
          placeHolder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputName="Email"
        />
        <Input
          type="text"
          placeHolder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          inputName="Age"
        />
        <Input
          type="password"
          placeHolder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputName="Password"
        />
        <br />
        <button onClick={submitHandler} type="button" class="btn btn-primary">
          Submit
        </button>
        <br />
        <br />
        {dataArray.map((element) => (
          <Card
            firstName={element.firstName}
            lastName={element.lastName}
            age={element.age}
            email={element.email}
            password={element.password}
          />
        ))}
      </div>
    </div>
  );
}

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");

// const submitHandler = () => {
//     const data = {
//         firstName,
//         lastName,
//         email
//     }
//     console.log('data :>> ', data);
// }

// return (
//     <div className="container">
//         <br />
//         <input
//             class="form-control"
//             type="text"
//             placeholder="Enter first name"
//             aria-label="default input example"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//         />
//         <br />
//         <input
//             class="form-control"
//             type="text"
//             placeholder="Enter last name"
//             aria-label="default input example"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//         />
//         <br />
//         <input
//             class="form-control"
//             type="text"
//             placeholder="Enter email"
//             aria-label="default input example"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <button
//             onClick={submitHandler}
//             type="button"
//             class="btn btn-primary"
//         >
//             Submit
//         </button>
//     </div>
// );
