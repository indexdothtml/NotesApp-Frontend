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

export function MoreNotes() {
  const notes = [
    {
      id: "1",
      name: "MeetingNotes-Q1-nl",
      previewContent: "Discussed quarterly goals and team updates.",
      createdAt: "2026-01-15T10:30:00Z",
    },
    {
      id: "2",
      name: "MeetingNotes-Q1-fr",
      previewContent: "Résumé de la réunion trimestrielle.",
      createdAt: "2026-01-15T11:00:00Z",
    },
    {
      id: "3",
      name: "MeetingNotes-Q1-en",
      previewContent: "Key highlights from Q1 meeting.",
      createdAt: "2026-01-15T09:45:00Z",
    },
    {
      id: "4",
      name: "MeetingNotes-Q1-de",
      previewContent: "Besprechung der Quartalsziele.",
      createdAt: "2026-01-15T12:15:00Z",
    },
    {
      id: "5",
      name: "ProjectPlan-Alpha-nl",
      previewContent: "Projectplan voor Alpha fase.",
      createdAt: "2026-02-01T08:20:00Z",
    },
    {
      id: "6",
      name: "ProjectPlan-Alpha-fr",
      previewContent: "Plan du projet Alpha.",
      createdAt: "2026-02-01T09:00:00Z",
    },
    {
      id: "7",
      name: "ProjectPlan-Alpha-en",
      previewContent: "Detailed roadmap for Alpha project.",
      createdAt: "2026-02-01T07:45:00Z",
    },
    {
      id: "8",
      name: "ProjectPlan-Alpha-de",
      previewContent: "Projektplan für Alpha-Phase.",
      createdAt: "2026-02-01T10:10:00Z",
    },
    {
      id: "9",
      name: "BudgetReport-2026-nl",
      previewContent: "Financieel overzicht voor 2026.",
      createdAt: "2026-03-05T14:00:00Z",
    },
    {
      id: "10",
      name: "BudgetReport-2026-fr",
      previewContent: "Rapport budgétaire pour 2026.",
      createdAt: "2026-03-05T14:30:00Z",
    },
  ];

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
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} position="left" />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
