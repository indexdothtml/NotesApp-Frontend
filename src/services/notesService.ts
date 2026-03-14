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
