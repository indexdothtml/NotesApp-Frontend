import { useForm, type SubmitHandler } from "react-hook-form";

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
import { FilePlus } from "lucide-react";

type FormValues = {
  name: string;
};

const handleServiceCall: SubmitHandler<FormValues> = (data) =>
  console.log(data);

export function AddNote() {
  const { register, handleSubmit } = useForm<FormValues>();
  return (
    <Dialog>
      <form onSubmit={handleSubmit(handleServiceCall)}>
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
            <Button type="submit" className="cursor-pointer">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
