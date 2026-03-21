import { useEffect, useState } from "react";
import { useEditor, EditorContent, type Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { TiptapTextEditorMenu } from "@/components/tiptap-text-editor-menu";
import { updateNote } from "@/services/notesServices";

type TiptapTextEditorProps = {
  savedContent?: Content;
  readOnly?: boolean;
  userId?: string;
  noteId?: string;
};

export function TiptapTextEditor({
  savedContent = "<p>You start typing here...</p>",
  readOnly = false,
  userId,
  noteId,
}: TiptapTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyleKit,
      Placeholder.configure({ placeholder: "Write something here..." }),
    ], // define your extension array
    content: savedContent, // initial content
  });

  const [isLoading, setIsLoading] = useState(false);

  // Change editable state.
  useEffect(() => {
    editor.setEditable(!readOnly);
  }, [readOnly]);

  const handleSave = async () => {
    if (userId && noteId) {
      setIsLoading(true);

      const response = await updateNote(userId, noteId, {
        content: editor.getHTML(),
      });

      if (response.success) {
        toast.success("Saved successfully!", { position: "top-center" });
      } else {
        toast.error("Failed to save.", { position: "top-center" });
      }

      setIsLoading(false);
    }
  };

  const handleDelete = async () => {};

  return (
    <>
      <TiptapTextEditorMenu editor={editor} readonly={readOnly} />
      <Separator className="mt-2" />
      <EditorContent className="pl-20 pr-20 pt-2" editor={editor} />
      <Separator className="mt-2" />
      <div className="flex justify-between">
        <Button
          variant="outline"
          aria-label="Save"
          className="cursor-pointer mt-2"
          disabled={readOnly || isLoading}
          onClick={handleSave}
        >
          {isLoading && <Spinner />}
          {isLoading ? "Saving..." : "Save"}
        </Button>

        <Button
          variant="destructive"
          aria-label="Delete"
          className="cursor-pointer mt-2"
          disabled={readOnly || isLoading}
          onClick={handleDelete}
        >
          {isLoading && <Spinner />}
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </>
  );
}
