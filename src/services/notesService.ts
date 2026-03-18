import axios from "axios";

import { env } from "@/envConfig";
import type { Note } from "@/types/types";

export async function getNote(noteId: string) {
  try {
    const response = await axios.get<Note[]>(`${env.api_hostname}/notes.json`);

    const note = response.data.find((note) => note.id == noteId);

    return note;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      console.log(error.response?.data);
    } else {
      console.log(error);
    }
  }
}

export async function getAllNotesFolders(userId: string) {
  await new Promise((resolve) =>
    setTimeout(() => resolve(`all folders of user ${userId}`), 3000),
  );

  return {
    success: true,
    data: [
      {
        id: "1",
        name: "Personal Projects",
      },
      {
        id: "2",
        name: "Office Work",
      },
      {
        id: "3",
        name: "Trip Plans",
      },
    ],
  };
}

export async function addNewNotesFolder(name: string) {
  await new Promise((resolve) => setTimeout(() => resolve(`new folder`), 3000));

  return {
    success: true,
    data: {
      id: String(Math.random() * 100),
      name,
    },
  };
}
