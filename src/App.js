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
  setTimeout(()=>{
    setAlert(null)
  },1500)
};

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
      document.title= "TextUtils - Light mode"
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled Dark Mode", "success");
      document.title="TextUtils - Dark mode"

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