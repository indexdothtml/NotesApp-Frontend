import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AddNote } from "@/pages/notes/add-note";
import { FileQuestionMark, FilePlus } from "lucide-react";

export function AllNotes() {
  const notes = [
    "MeetingNotes-Q1-nl",
    "MeetingNotes-Q1-fr",
    "MeetingNotes-Q1-en",
    "MeetingNotes-Q1-de",
    "ProjectPlan-Alpha-nl",
    "ProjectPlan-Alpha-fr",
    "ProjectPlan-Alpha-en",
    "ProjectPlan-Alpha-de",
    "BudgetReport-2026-nl",
    "BudgetReport-2026-fr",
    "BudgetReport-2026-en",
    "BudgetReport-2026-de",
    "ClientFeedback-March-nl",
    "ClientFeedback-March-fr",
    "ClientFeedback-March-en",
    "ClientFeedback-March-de",
    "TrainingGuide-NewHire-nl",
    "TrainingGuide-NewHire-fr",
    "TrainingGuide-NewHire-en",
    "TrainingGuide-NewHire-de",
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
        <ScrollArea className="h-60">
          <div className="grid grid-cols-3 gap-4">
            {notes.map((note) => (
              <HoverCard key={note} openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="cursor-pointer">
                    {note}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="font-semibold">{note}</div>
                  <div className="mt-1">
                    Some notes content goes here from starting of note...
                  </div>
                  <div className="text-xs opacity-55 mt-1">
                    Created March 12 2026
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </ScrollArea>
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
