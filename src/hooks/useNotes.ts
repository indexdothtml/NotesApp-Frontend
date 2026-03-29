import { useAppSelector, useAppDispatch } from "@/hooks/useStore";
import {
  setCurrentFolder,
  setFolders,
  setNotes,
  unsetFolders,
  addNewFolder,
  addNewNote,
} from "@/features/notesSlice";
import type { NotesFolder, NotePreview } from "@/types/types";

export function useNotes() {
  // Get all notes data.
  const notesData = useAppSelector((state) => state.notes.notesData);

  // Dispatch init.
  const dispatch = useAppDispatch();

  // Set all user's folders.
  const dispatchSetFolders = (folders: NotesFolder[]) => {
    dispatch(setFolders(folders));
  };

  // Add new folder.
  const dispatchAddNewFolder = (folder: NotesFolder) => {
    dispatch(addNewFolder(folder));
  };

  // Set current selected folder.
  const dispatchSetCurrentFolder = (currentFolderId: NotesFolder["id"]) => {
    dispatch(setCurrentFolder(currentFolderId));
  };

  // Set current selected folder's notes.
  const dispatchSetNotes = (notes: NotePreview[]) => {
    dispatch(setNotes(notes));
  };

  // Add new note.
  const dispatchAddNewNote = (note: NotePreview) => {
    dispatch(addNewNote(note));
  };

  // Unset folder selection.
  const dispatchUnsetFolders = () => {
    dispatch(unsetFolders());
  };

  return {
    notesData,
    dispatchSetFolders,
    dispatchSetCurrentFolder,
    dispatchSetNotes,
    dispatchUnsetFolders,
    dispatchAddNewFolder,
    dispatchAddNewNote,
  };
}
