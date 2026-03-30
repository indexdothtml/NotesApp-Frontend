import { CircleEllipsis } from "lucide-react";
import { Virtuoso } from "react-virtuoso";
import { type ButtonHTMLAttributes } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NoteCard } from "@/components/note-card";
import type { NotePreview } from "@/types/types";

type MoreNotesProps = {
  notes: NotePreview[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function MoreNotes({ notes, ...buttonProps }: MoreNotesProps) {
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
        <Virtuoso
          style={{ height: "240px" }}
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
      </DialogContent>
    </Dialog>
  );
}
