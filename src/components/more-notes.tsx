import { CircleEllipsis } from "lucide-react";
import { Virtuoso } from "react-virtuoso";
import {
  type ButtonHTMLAttributes,
  type ChangeEvent,
  useRef,
  useState,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NoteCard } from "@/components/note-card";
import { debounceSearchQuery } from "@/lib/utils";
import type { NotePreview } from "@/types/types";

type MoreNotesProps = {
  userId?: string;
  notes: NotePreview[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function MoreNotes({ userId, notes, ...buttonProps }: MoreNotesProps) {
  const timeOutId = useRef<number | undefined>(undefined);

  const [searchedNotes, setSearchedNotes] = useState<NotePreview[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (userId) {
      timeOutId.current = debounceSearchQuery(
        userId,
        event.target.value,
        500,
        timeOutId.current,
        setSearchedNotes,
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="cursor-pointer" {...buttonProps}>
          <CircleEllipsis /> More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Notes</DialogTitle>
          <DialogDescription>
            Remaining all your notes can be found here.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Search..." onChange={handleSearch} />
        {searchedNotes.length !== 0 ? (
          <ScrollArea className="h-60">
            <div className="flex flex-col">
              {searchedNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <Virtuoso
            style={{ height: "244px" }}
            className="h-60 no-scrollbar pl-28"
            totalCount={notes.length}
            itemContent={(index) => (
              <NoteCard
                key={notes[index].id}
                note={notes[index]}
                position="left"
              />
            )}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
