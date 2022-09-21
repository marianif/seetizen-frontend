import { Editor, RichUtils } from "draft-js";
import { useEffect, useRef } from "react";
import styles from "@/styles/components/TextEditor.module.css";

const TextEditor = ({ state, onChange }) => {
  const { editorState, setEditorState } = state;
  const editor = useRef(null);

  // const onChange = (editorState) => {
  //   setEditorState(editorState);
  // };

  const onClickEditor = () => {
    editor.current?.focus();
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  useEffect(() => {
    editor.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div onClick={onClickEditor} className={styles.editorContainer}>
        <Editor
          customStyleMap={styleMap}
          // blockRenderMap={blockRenderMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
          // placeholder="Tell a story..."
          editorKey="011"
          spellCheck={false}
          ref={(element) => {
            editor.current = element;
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;

// Custom overrides for each style
const styleMap = {
  BOLD: {
    color: "#090909",
    fontWeight: "bold",
  },
  ITALIC: {
    color: "#090909",
    fontStyle: "italic",
  },
};

// // The example below deliberately only allows
// // 'heading-two' as the only valid block type and
// const blockRenderMap = Immutable.Map({
//   "header-two": {
//     element: "h2",
//     wrapper: <h2 style={{ color: "red" }}></h2>,
//   },
// });
