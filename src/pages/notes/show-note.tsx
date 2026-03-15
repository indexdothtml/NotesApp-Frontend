import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowBigLeft, Eye, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SkeletonText } from "@/components/skeleton-text";
import { TiptapTextEditor } from "@/components/tiptap-text-editor";
import { getNote } from "@/services/notesService";
import type { Note } from "@/types/types";
import { formatDate } from "@/lib/utils";

type ShowNoteParam = {
  noteId: string;
};

export function ShowNote() {
  const { noteId } = useParams<ShowNoteParam>();

  const [note, setNote] = useState<Note | null>(null);

  const [isReadOnlyText, setIsReadOnlyText] = useState(true);

  useEffect(() => {
    (async function () {
      if (noteId) {
        const data = await getNote(noteId);
        if (data) {
          setNote(data);
        }
      }
    })();
  }, []);

  if (!note) {
    return <SkeletonText />;
  }

  return (
    <div className="w-5xl m-auto mt-12 mb-4">
      <h1 className="text-xl font-semibold">{note.name}</h1>
      <h2 className="text-sm">Created {formatDate(note.createdAt)}</h2>
      <div className="mt-4 flex gap-4 items-center">
        <Button
          variant="outline"
          size="icon"
          aria-label="Back"
          className="cursor-pointer"
        >
          <Link to="/notes">
            <ArrowBigLeft />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Read only"
          className="cursor-pointer"
          onClick={() => setIsReadOnlyText((state) => !state)}
        >
          {isReadOnlyText ? <Pencil /> : <Eye />}
        </Button>
      </div>

      <div className="mt-2">
        <TiptapTextEditor
          readOnly={isReadOnlyText}
          savedContent="<p>My name is abhishek<p>"
        />
      </div>
    </div>
  );
}
