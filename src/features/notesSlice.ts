import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { NotesData, NotesFolder, NotePreview } from "@/types/types";

type NotesInitialState = {
  notesData: NotesData;
};

const initialState: NotesInitialState = {
  notesData: {
    notesFolders: [],
  },
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setFolders: (state, action: PayloadAction<NotesFolder[]>) => {
      state.notesData.notesFolders = action.payload;
    },

    addNewFolder: (state, action: PayloadAction<NotesFolder>) => {
      state.notesData.notesFolders = [
        action.payload,
        ...state.notesData.notesFolders,
      ];
    },

    unsetFolders: (state) => {
      state.notesData.notesFolders = [];
    },

    setCurrentFolder: (state, action: PayloadAction<NotesFolder>) => {
      state.notesData.currentFolder = action.payload;
    },

    setNotes: (state, action: PayloadAction<NotePreview[]>) => {
      state.notesData.notes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFolders,
  addNewFolder,
  unsetFolders,
  setCurrentFolder,
  setNotes,
} = notesSlice.actions;

export default notesSlice.reducer;
