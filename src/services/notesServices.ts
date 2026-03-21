export async function getNote(userId: string, noteId: string) {
  await new Promise((response) => setTimeout(() => response("get note"), 3000));

  return {
    success: true,
    userId,
    noteId,
    data: {
      id: noteId,
      name: "Meet Note",
      content:
        "<p>This is first para</p><p>This is second para</p><p>This is thrid para</p>",
      createdAt: "2026-03-09T20:00:00Z",
      updatedAt: "2026-03-09T20:00:00Z",
    },
  };
}

export async function updateNote(
  userId: string,
  noteId: string,
  data: { name?: string; content?: string },
) {
  await new Promise((resolve) => setTimeout(() => resolve("2"), 3000));

  return {
    success: true,
    userId,
    noteId,
    data: {
      id: noteId,
      name: "Meet Note",
      content: data.content,
      createdAt: "2026-03-09T20:00:00Z",
      updatedAt: "2026-03-09T20:00:00Z",
    },
  };
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

export async function addNewNotesFolder(userId: string, name: string) {
  await new Promise((resolve) => setTimeout(() => resolve(`new folder`), 3000));

  return {
    success: true,
    userId,
    data: {
      id: String(Math.random() * 100),
      name,
    },
  };
}

export async function addNewNote(
  userId: string,
  folderId: string,
  name: string,
) {
  await new Promise((resolve) =>
    setTimeout(() => resolve(`add new note`), 3000),
  );

  return {
    success: true,
    userId,
    folderId,
    data: {
      id: String(Math.random() * 100),
      name,
      previewContent: "No content yet...",
      createdAt: "2026-03-09T20:00:00Z",
    },
  };
}

export async function getAllNotes(userId: string, folderId: string) {
  await new Promise((resolve) =>
    setTimeout(() => resolve(`${userId} ${folderId}`), 3000),
  );

  return {
    success: true,
    data: [
      {
        id: "1",
        name: "MeetingNotes-Q1-nl",
        previewContent: "Discussed quarterly goals and team updates.",
        createdAt: "2026-01-15T10:30:00Z",
      },
      {
        id: "2",
        name: "MeetingNotes-Q1-fr",
        previewContent: "Résumé de la réunion trimestrielle.",
        createdAt: "2026-01-15T11:00:00Z",
      },
      {
        id: "3",
        name: "MeetingNotes-Q1-en",
        previewContent: "Key highlights from Q1 meeting.",
        createdAt: "2026-01-15T09:45:00Z",
      },
      {
        id: "4",
        name: "MeetingNotes-Q1-de",
        previewContent: "Besprechung der Quartalsziele.",
        createdAt: "2026-01-15T12:15:00Z",
      },
      {
        id: "5",
        name: "ProjectPlan-Alpha-nl",
        previewContent: "Projectplan voor Alpha fase.",
        createdAt: "2026-02-01T08:20:00Z",
      },
      {
        id: "6",
        name: "ProjectPlan-Alpha-fr",
        previewContent: "Plan du projet Alpha.",
        createdAt: "2026-02-01T09:00:00Z",
      },
      {
        id: "7",
        name: "ProjectPlan-Alpha-en",
        previewContent: "Detailed roadmap for Alpha project.",
        createdAt: "2026-02-01T07:45:00Z",
      },
      {
        id: "8",
        name: "ProjectPlan-Alpha-de",
        previewContent: "Projektplan für Alpha-Phase.",
        createdAt: "2026-02-01T10:10:00Z",
      },
      {
        id: "9",
        name: "BudgetReport-2026-nl",
        previewContent: "Financieel overzicht voor 2026.",
        createdAt: "2026-03-05T14:00:00Z",
      },
      {
        id: "10",
        name: "BudgetReport-2026-fr",
        previewContent: "Rapport budgétaire pour 2026.",
        createdAt: "2026-03-05T14:30:00Z",
      },
      {
        id: "11",
        name: "Eleventh note",
        previewContent: "This goes into extra.",
        createdAt: "2026-03-05T14:30:00Z",
      },
    ],
  };
}
