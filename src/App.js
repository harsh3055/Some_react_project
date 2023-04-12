import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
function App() {
  const [mode, setmode] = useState("dark");

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />

      <div className="container my-3">
        <TextForm heading="Enter The Text To Change" mode={mode} />
      </div>

      {/* <About/> */}
    </>
  );
}
export default App;
