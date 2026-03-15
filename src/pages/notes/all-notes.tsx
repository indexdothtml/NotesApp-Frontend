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
import { AddNote } from "@/pages/notes/add-note";
import { MoreNotes } from "@/pages/notes/more-notes";

export function AllNotes() {
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

  //   const notes: string[] = [];

  return (
    <div className="w-4xl flex flex-col items-center m-auto mt-8 gap-4">
      <div className="flex items-end gap-12">
        <div className="pl-2.5 gap-4">
          <h1 className="text-4xl font-semibold">Notes</h1>
          <h2 className="opacity-65">
            Here you can find all of your notes from selected folder.
          </h2>
        </div>
        <AddNote />
      </div>
      <Separator />
      {notes && notes.length != 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteCard note={note} />
          ))}
          <MoreNotes />
        </div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FileQuestionMark />
            </EmptyMedia>
            <EmptyTitle>No Notes To Show Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any note yet. Get started by creating
              your first note.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
      <Separator />
    </div>
  );
}
