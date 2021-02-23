import { useState } from "react";
import TinyMCE from "react-tinymce";
import TintCloud from "./components/TintCloud";

function App() {
  const [body, setBody] = useState("");
  const onChange = (e) => {
    setBody(e.target.getContent());
  };
  const setData = (e) => {};
  return (
    <div className="App">
      {/* <TinyMCE onChange={onChange}></TinyMCE>
      <div>{body}</div> */}
      <TintCloud />
    </div>
  );
}

export default App;
