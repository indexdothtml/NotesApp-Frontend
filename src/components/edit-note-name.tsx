import { useState, type Dispatch, type SetStateAction } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Pencil } from "lucide-react";
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
import { updateNote } from "@/services/notesServices";
import type { Note } from "@/types/types";

type FormValues = {
  name: string;
};

type EditNoteNameProps = {
  userId?: string;
  noteId?: string;
  setNote: Dispatch<SetStateAction<Note | undefined>>;
};

export function EditNoteName({ userId, noteId, setNote }: EditNoteNameProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const handleOnSubmit: SubmitHandler<FormValues> = async ({ name }) => {
    if (userId && noteId) {
      const response = await updateNote(userId, noteId, { name });

      if (response.success) {
        setNote((prev) => prev && { ...prev, name });
      } else {
        toast.error("Failed to update note name.", { position: "top-center" });
      }
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon-xs"
          aria-label="Edit name"
          className="cursor-pointer"
        >
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit note name</DialogTitle>
          <DialogDescription>
            Edit note name. Click save when you&apos;re done.
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
              {isSubmitting ? "Updating..." : "Edit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
