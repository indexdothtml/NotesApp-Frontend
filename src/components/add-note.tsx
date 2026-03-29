import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FilePlus } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useNotes } from "@/hooks/useNotes";
import { addNewNote } from "@/services/notesServices";

type FormValues = {
  name: string;
};

type AddNoteProps = {
  userId?: string;
};

export function AddNote({ userId }: AddNoteProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const { dispatchAddNewNote, notesData } = useNotes();

  const { currentFolderId } = notesData;

  const [isOpen, setIsOpen] = useState(false);

  const handleOnSubmit: SubmitHandler<FormValues> = async ({ name }) => {
    if (!currentFolderId && currentFolderId === "_")
      toast.error("First create new folder.", {
        position: "top-center",
      });

    if (userId && currentFolderId) {
      const response = await addNewNote(userId, currentFolderId, name);

      if (response.success) {
        dispatchAddNewNote(response.data);
      }
    }

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          <FilePlus /> New note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create new note</DialogTitle>
          <DialogDescription>
            Make a new note. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Note name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Travel list"
              {...register("name", { required: true })}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner />}
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
