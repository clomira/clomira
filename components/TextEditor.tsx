import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import { EditorState } from "draft-js";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // console.log(editorState.getCurrentContent().getPlainText());

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};

export default TextEditor;
