import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React, {useState} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    message: message,
    type: type
  })
};

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Dark Mode", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled light Mode", "success");
    }
  };
  return (

    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter The Text To Change" mode={mode} />
      </div>

      {/* <About/> */}
    </>
  );
}
export default App;