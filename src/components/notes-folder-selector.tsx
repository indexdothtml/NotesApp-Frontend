import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { AddNotesFolder } from "@/components/add-notes-folder";
import { getAllNotesFolders } from "@/services/notesServices";

type NotesSelectorProps = {
  userId?: string;
  onSelectChange: (value: string) => void;
};

export function NotesFolderSelector({
  userId,
  onSelectChange,
}: NotesSelectorProps) {
  const [notesFolders, setNotesFolders] = useState<
    { id: string; name: string }[]
  >([]);

  useEffect(() => {
    (async function () {
      if (userId) {
        const response = await getAllNotesFolders(userId);

        if (response.success) {
          setNotesFolders(response.data);
        } else {
          setNotesFolders([]);
        }
      }
    })();
  }, [userId]);

  return (
    <div className="flex gap-32">
      <Select
        onValueChange={onSelectChange}
        disabled={notesFolders.length === 0}
      >
        <SelectTrigger className="w-45">
          <SelectValue
            placeholder={
              notesFolders.length === 0
                ? "Fetching folders..."
                : "Your notes folders"
            }
          />
          {notesFolders.length === 0 && <Spinner />}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {notesFolders.length !== 0 ? (
              notesFolders.map((folder) => (
                <SelectItem key={folder.id} value={folder.id}>
                  {folder.name}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="_">No folders available</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <AddNotesFolder userId={userId} setNotesFolders={setNotesFolders} />
    </div>
  );
}
