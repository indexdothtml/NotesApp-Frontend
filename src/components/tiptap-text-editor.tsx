import { useEffect } from "react";
import { useEditor, EditorContent, type Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TiptapTextEditorMenu } from "@/components/tiptap-text-editor-menu";

type TiptapTextEditorProps = {
  savedContent?: Content;
  readOnly?: boolean;
};

export function TiptapTextEditor({
  savedContent = "<p>You start typing here...</p>",
  readOnly = false,
}: TiptapTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, TextStyleKit], // define your extension array
    content: savedContent, // initial content
  });

  // Change editable state.
  useEffect(() => {
    editor.setEditable(!readOnly);
  }, [readOnly]);

  const handleSave = () => {
    console.log(editor.getHTML());
  };

  return (
    <>
      <TiptapTextEditorMenu editor={editor} readonly={readOnly} />
      <Separator className="mt-2" />
      <EditorContent editor={editor} />
      <Separator className="mt-2" />
      <Button
        variant="outline"
        aria-label="Save"
        className="cursor-pointer mt-2"
        disabled={readOnly}
        onClick={handleSave}
      >
        Save
      </Button>
    </>
  );
}
