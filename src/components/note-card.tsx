import { Link } from "react-router";
import { type ButtonHTMLAttributes } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { NotePreview } from "@/types/types";

type NoteCardProps = {
  note: NotePreview;
  position?: "bottom" | "left" | "top" | "right";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function NoteCard({
  note,
  position = "bottom",
  ...buttonProps
}: NoteCardProps) {
  return (
    <HoverCard key={note.id} openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link" className="cursor-pointer" {...buttonProps}>
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
