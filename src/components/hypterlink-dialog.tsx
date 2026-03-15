import { type ReactElement, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Hyperlink } from "@/types/types";

type HyperlinkDialogProps = {
  children: ReactElement<typeof Button>;
  formSubmitHandler: ({ href }: Hyperlink) => boolean;
};

export function HyperlinkDialog({
  children,
  formSubmitHandler,
}: HyperlinkDialogProps) {
  const { register, handleSubmit } = useForm<Hyperlink>();

  const [isOpen, setIsOpen] = useState(false);

  const onFormSubmit: SubmitHandler<Hyperlink> = ({ href }) => {
    formSubmitHandler({ href });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add hyperlink</DialogTitle>
          <DialogDescription>
            Select text and enter below href to create link.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="href">href</Label>
            <Input
              id="href"
              type="text"
              placeholder="https://www.example.com"
              {...register("href", { required: true })}
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
