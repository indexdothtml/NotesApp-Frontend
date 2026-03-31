import { useState } from "react";
import { FileQuestionMark } from "lucide-react";
import { toast } from "sonner";

import { Separator } from "@/components/ui/separator";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { NoteCard } from "@/components/note-card";
import { NotesFolderSelector } from "@/components/notes-folder-selector";
import { AddNotesFolder } from "@/components/add-notes-folder";
import { AddNote } from "@/components/add-note";
import { DeleteWithCaution } from "@/components/delete-with-caution";
import { MoreNotes } from "@/components/more-notes";
import { SkeletonNotes } from "@/components/skeleton-notes";
import { getAllNotes, deleteCurrentFolder } from "@/services/notesServices";
import { useNotes } from "@/hooks/useNotes";
import { useAuth } from "@/hooks/useAuth";

export function AllNotesPage() {
  const { isAuthenticated, userData } = useAuth();

  const {
    dispatchSetNotes,
    dispatchSetCurrentFolder,
    dispatchSetFolders,
    notesData,
  } = useNotes();

  const notes = notesData.notes ?? [];

  const [isLoading, setIsLoading] = useState(false);

  const [isDeletingFolder, setIsDeletingFolder] = useState(false);

  const handleSelectChange = async (currentFolderId: string) => {
    if (currentFolderId === "_") return;

    dispatchSetCurrentFolder(currentFolderId);

    if (isAuthenticated && userData) {
      setIsLoading(true);

      const response = await getAllNotes(userData.id, currentFolderId);

      if (response.success) {
        dispatchSetNotes(response.data);
      } else {
        dispatchSetNotes([]);
      }

      setIsLoading(false);
    }
  };

  const handleDeleteFolder = async () => {
    setIsDeletingFolder(true);

    if (!notesData.currentFolderId)
      toast.error("Folder is not selected.", { position: "top-center" });

    if (userData && notesData.currentFolderId) {
      const response = await deleteCurrentFolder(
        userData.id,
        notesData.currentFolderId,
      );

      if (response.success) {
        const updatedFolders = notesData.notesFolders.filter(
          (folder) => folder.id !== notesData.currentFolderId,
        );

        dispatchSetCurrentFolder("_");
        dispatchSetFolders(updatedFolders);
        dispatchSetNotes([]);

        toast.success("Folder deleted successfully!", {
          position: "top-center",
        });
      } else {
        toast.error("Failed to delete this folder", { position: "top-center" });
      }
    }

    setIsDeletingFolder(false);
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
        <div className="flex justify-center gap-32">
          <NotesFolderSelector
            userId={userData?.id}
            onSelectChange={handleSelectChange}
            disabled={isDeletingFolder}
          />

          <div>
            <AddNotesFolder userId={userData?.id} disabled={isDeletingFolder} />

            <AddNote userId={userData?.id} disabled={isDeletingFolder} />
          </div>

          <DeleteWithCaution
            alertTitle="Are you absolutely sure?"
            alertDescription="This action cannot be undone. This will permanently delete your
                current selected folder and notes inside it."
            onDelete={handleDeleteFolder}
          >
            <Button
              variant="destructive"
              aria-label="Delete folder"
              className="cursor-pointer"
              disabled={isDeletingFolder}
            >
              {isDeletingFolder && <Spinner />}
              {isDeletingFolder ? "Deleting..." : "Delete folder"}
            </Button>
          </DeleteWithCaution>
        </div>
      </div>
      <Separator />
      {isLoading ? (
        <SkeletonNotes />
      ) : notes.length !== 0 ? (
        <div className="grid grid-cols-3 justify-items-start gap-4">
          {notes.slice(0, 10).map((note) => (
            <NoteCard key={note.id} note={note} disabled={isDeletingFolder} />
          ))}
          <MoreNotes
            userId={userData?.id}
            notes={notes.slice(10)}
            disabled={isDeletingFolder}
          />
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
