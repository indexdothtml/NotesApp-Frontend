import { Link } from "react-router";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

type Note = {
  id: string;
  name: string;
  previewContent: string;
  createdAt: string;
};

type NoteCardProps = {
  note: Note;
  position?: "bottom" | "left" | "top" | "right";
};

export function NoteCard({ note, position = "bottom" }: NoteCardProps) {
  return (
    <HoverCard key={note.id} openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link" className="cursor-pointer">
          <Link to={`/notes/${note.id}`}>{note.name}</Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent side={position}>
        <div className="font-semibold">{note.name}</div>
        <div className="mt-1">{note.previewContent}</div>
        <div className="text-xs opacity-55 mt-1">
          Created {formatDate(note.createdAt)}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
