import { CircleEllipsis } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NoteCard } from "@/components/note-card";
import type { NotePreview } from "@/types/types";

type MoreNotesProps = {
  notes: NotePreview[];
};

export function MoreNotes({ notes }: MoreNotesProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="cursor-pointer">
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
        <ScrollArea className="h-60">
          <div className="flex flex-col gap-2">
            {notes.slice(10).map((note) => (
              <NoteCard key={note.id} note={note} position="left" />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
