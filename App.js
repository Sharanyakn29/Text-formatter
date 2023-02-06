import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import Overview from "./components/Overview";
import Textform from "./components/Textform";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#07052b";
      document.body.style.Color = "white";
      showalert("Dark mode has been enabled", "success");
      document.title = "Text Analyzer-Darkmode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.Color = "black";
      showalert("Light mode has been enabled", "success");
      document.title = "Text Analyzer-Lightmode";
    }
  };

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar
        title="Text Analyzer"
        Homepage="Homepage"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Textform
          heading="Enter the text to analyze"
          mode={mode}
          showalert={showalert}
        />
        {/* <Overview /> */}
      </div>
    </>
  );
}

export default App;
