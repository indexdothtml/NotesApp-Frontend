import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useNotes } from "@/hooks/useNotes";

type NotesSelectorProps = {
  onSelectChange: (value: string) => void;
};

export function NotesFolderSelector({ onSelectChange }: NotesSelectorProps) {
  const { notesData } = useNotes();

  const { notesFolders } = notesData;

  return (
    <Select onValueChange={onSelectChange} disabled={notesFolders.length === 0}>
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
  );
}
