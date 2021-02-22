import { useState } from "react";
import TinyMCE from "react-tinymce";

function App() {
  const [body, setBody] = useState("");
  const onChange = (e) => {
    setBody(e.target.getContent());
  };
  const setData = (e) => {};
  return (
    <div className="App">
      <TinyMCE onChange={onChange}></TinyMCE>
      <div>{body}</div>
    </div>
  );
}

export default App;
