import { useState } from "react";
import { FileQuestionMark } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { NoteCard } from "@/components/note-card";
import { NotesFolderSelector } from "@/components/notes-folder-selector";
import { AddNote } from "@/components/add-note";
import { MoreNotes } from "@/components/more-notes";
import { SkeletonNotes } from "@/components/skeleton-notes";
import { getAllNotes } from "@/services/notesServices";
import { useAuth } from "@/hooks/useAuth";
import type { NotePreview } from "@/types/types";

export function AllNotesPage() {
  const { isAuthenticated, userData } = useAuth();

  const [selectedFolderId, setSelectedFolderId] = useState<string | undefined>(
    undefined,
  );

  const [notes, setNotes] = useState<NotePreview[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = async (value: string) => {
    setSelectedFolderId(value);

    if (isAuthenticated && userData) {
      setIsLoading(true);

      const response = await getAllNotes(userData.id, value);

      if (response.success) {
        setNotes(response.data);
      } else {
        setNotes([]);
      }

      setIsLoading(false);
    }
  };

  return (
    <div className="w-4xl flex flex-col items-center m-auto mt-8 gap-4">
      <div className="flex flex-col gap-4">
        <div className="pl-2.5 flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Notes</h1>
          <h2 className="opacity-65">
            Here you can find all of your notes from selected folder.
          </h2>
        </div>
        <div className="flex">
          <NotesFolderSelector
            userId={userData?.id}
            onSelectChange={handleSelectChange}
          />
          <div>
            <AddNote
              userId={userData?.id}
              folderId={selectedFolderId}
              setNotes={setNotes}
            />
          </div>
        </div>
      </div>
      <Separator />
      {isLoading ? (
        <SkeletonNotes />
      ) : notes.length !== 0 ? (
        <div className="grid grid-cols-3 justify-items-start gap-4">
          {notes.slice(0, 10).map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
          <MoreNotes notes={notes} />
        </div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FileQuestionMark />
            </EmptyMedia>
            <EmptyTitle>No Notes To Show Yet</EmptyTitle>
            <EmptyDescription>
              It seems you haven&apos;t created any note yet or selected correct
              folder.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
      <Separator />
    </div>
  );
}
