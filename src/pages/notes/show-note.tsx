import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowBigLeft, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SkeletonText } from "@/components/skeleton-text";
import { Separator } from "@/components/ui/separator";
import { getNote } from "@/services/notesService";
import type { Note } from "@/types/types";
import { formatDate } from "@/utils/dateFormatter";

type ShowNoteParam = {
  noteId: string;
};

export function ShowNote() {
  const { noteId } = useParams<ShowNoteParam>();

  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    (async function () {
      if (noteId) {
        const data = await getNote(noteId);
        if (data) {
          setNote(data);
        }
      }
    })();
  }, []);

  if (!note) {
    return <SkeletonText />;
  }

  return (
    <div className="w-5xl m-auto mt-12">
      <h1 className="text-xl font-semibold">{note.name}</h1>
      <h2 className="text-sm">Created {formatDate(note.createdAt)}</h2>
      <div className="flex gap-4 mt-4">
        <Button
          variant="outline"
          size="icon"
          aria-label="Back"
          className="cursor-pointer"
        >
          <Link to="/notes">
            <ArrowBigLeft />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Read only"
          className="cursor-pointer"
        >
          <Eye />
        </Button>
      </div>
      <Separator className="mt-2" />
      <div className="mt-2">
        {note.content}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        reiciendis repudiandae. In ipsum iusto rem ab earum culpa voluptates
        deserunt labore inventore cum aspernatur vel consequuntur illum animi,
        explicabo dolores, est at adipisci suscipit architecto veniam, beatae
        tempore saepe mollitia. Doloribus eum in repudiandae cum laudantium
        veniam libero tempora alias. Explicabo alias debitis sequi repudiandae,
        nisi repellendus sit eius esse voluptates modi consequuntur quas,
        doloremque cupiditate totam molestiae dolorum porro eaque veniam,
        numquam repellat earum quibusdam. Placeat distinctio veniam soluta
        quaerat hic, molestiae eius cumque. Veritatis id, quae magnam
        voluptatibus molestias illum earum non quasi velit saepe in repudiandae
        voluptatum!
      </div>
    </div>
  );
}
