import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from "react-html-parser";

const TintCloud = () => {
  const [display, setDisplay] = useState(null);
  const handleEditorChange = (content, editor) => {
    console.log({ content });
    setDisplay(content);
  };
  return (
    <>
      <Editor
        apiKey="lz670kty0rwllutn8ee24oc7t064sqxl948wrg7m1lb132c4"
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      />

      {ReactHtmlParser(display)}
    </>
  );
};

export default TintCloud;
