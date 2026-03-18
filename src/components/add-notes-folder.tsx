import { useState, type Dispatch, type SetStateAction } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FolderPlus } from "lucide-react";

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
import { addNewNotesFolder } from "@/services/notesServices";

type FormValues = {
  name: string;
};

type AddNotesFolderProps = {
  setNotesFolders: Dispatch<
    SetStateAction<
      {
        id: string;
        name: string;
      }[]
    >
  >;
};

export function AddNotesFolder({ setNotesFolders }: AddNotesFolderProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit: SubmitHandler<FormValues> = async ({ name }) => {
    // API response should return newly added folder details like its id and name. So state can update instantly with refetching data.
    const response = await addNewNotesFolder(name);

    if (response.success) {
      // Updating state of folders.
      setNotesFolders((prev) => [
        { id: response.data.id, name: response.data.name },
        ...prev,
      ]);
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          <FolderPlus /> New folder
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create notes folder</DialogTitle>
          <DialogDescription>
            Make a new folder to seperate your releated notes. Click save when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Folder name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Personal notes"
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
