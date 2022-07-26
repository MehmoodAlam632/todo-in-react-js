import { useState } from "react";
import Card from "./components/card";
import TextForm from "./components/textForm";
import Form from "./components/form";
import Form1 from "./components/form1";



function App() {
  // const boysName = ["Anwar", "Ayan", "Ali", 23, 65];
  // let count = 5;
  return (
    <>
      {/* <TextForm heading= "Enter Text to Analyse"/> */}
      <Form/>
      {/* <Form1/> */}


    </>
    // <div>
    //   {boysName.map(() => {
    //     return <Card></Card>;
    //   })}
    // </div>
    // <div>
    //   {new Array(count).fill(0).map((e) => {
    //     return <Card></Card>;
    //   })}
    // </div>
  );
}

export default App;
