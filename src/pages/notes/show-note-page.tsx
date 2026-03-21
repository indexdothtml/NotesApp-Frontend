import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowBigLeft, Eye, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SkeletonShowNote } from "@/components/skeleton-show-note";
import { TiptapTextEditor } from "@/components/tiptap-text-editor";
import { getNote } from "@/services/notesServices";
import { useAuth } from "@/hooks/useAuth";
import { formatDate } from "@/lib/utils";
import type { Note } from "@/types/types";

type ShowNoteParam = {
  noteId: string;
};

export function ShowNotePage() {
  const { noteId } = useParams<ShowNoteParam>();

  const { isAuthenticated, userData } = useAuth();

  const [note, setNote] = useState<Note | undefined>(undefined);

  const [isReadOnlyText, setIsReadOnlyText] = useState(true);

  useEffect(() => {
    (async function () {
      if (isAuthenticated && userData && noteId) {
        const response = await getNote(userData.id, noteId);

        if (response.success) {
          setNote(response.data);
        }
      }
    })();
  }, [isAuthenticated, userData, noteId]);

  return (
    <div className="w-5xl m-auto mt-12 mb-4">
      {!note ? (
        <SkeletonShowNote />
      ) : (
        <>
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
              savedContent={note.content}
              userId={userData?.id}
              noteId={noteId}
            />
          </div>
        </>
      )}
    </div>
  );
}
