// src/Tiptap.tsx
import {
  useEditor,
  EditorContent,
  useEditorState,
  type EditorStateSnapshot,
  type Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TiptapMenuBar from "./TiptapMenuBar.tsx";

function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit], // define your extension array
  });

  const editorState = useEditorState({
    editor,
    selector: (ctx: EditorStateSnapshot<Editor>) => {
      return {
        isBold: ctx.editor.isActive("bold") ? true : false,
      };
    },
  });

  return (
    <>
      <TiptapMenuBar editor={editor} editorState={editorState} />
      <EditorContent
        className="mt-4 ProseMirror-focused p-2 rounded-md bg-inherit"
        editor={editor}
      />
    </>
  );
}

export default TiptapEditor;
