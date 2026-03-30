import { useEffect, useState } from "react";
import { useEditor, EditorContent, type Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import { toast } from "sonner";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { TiptapTextEditorMenu } from "@/components/tiptap-text-editor-menu";
import { DeleteWithCaution } from "@/components/delete-with-caution";
import { updateNote, deleteNote } from "@/services/notesServices";

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

  const navigate = useNavigate();

  const [isSaving, setIsSaving] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  // Change editable state.
  useEffect(() => {
    editor.setEditable(!readOnly);
  }, [readOnly]);

  const handleSave = async () => {
    if (userId && noteId) {
      setIsSaving(true);

      const response = await updateNote(userId, noteId, {
        content: editor.getHTML(),
      });

      if (response.success) {
        toast.success("Saved successfully!", { position: "top-center" });
      } else {
        toast.error("Failed to save.", { position: "top-center" });
      }

      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (userId && noteId) {
      setIsDeleting(true);

      const response = await deleteNote(userId, noteId);

      if (response.success) {
        toast.success(`Note ${response.data.name} deleted successfully!`, {
          position: "top-center",
        });
        navigate("/notes");
      } else {
        toast.error("Failed to delete.", { position: "top-center" });
      }

      setIsDeleting(false);
    }
  };

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
          disabled={readOnly || isSaving || isDeleting}
          onClick={handleSave}
        >
          {isSaving && <Spinner />}
          {isSaving ? "Saving..." : "Save"}
        </Button>

        <DeleteWithCaution
          alertTitle="Are you absolutely sure?"
          alertDescription="This action cannot be undone. This will permanently delete your
                note."
          onDelete={handleDelete}
        >
          <Button
            variant="destructive"
            aria-label="Delete"
            className="cursor-pointer mt-2"
            disabled={readOnly || isDeleting || isSaving}
          >
            {isDeleting && <Spinner />}
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DeleteWithCaution>
      </div>
    </>
  );
}
