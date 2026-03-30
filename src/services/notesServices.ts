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

export async function deleteNote(userId: string, noteId: string) {
  await new Promise((resolve) => setTimeout(() => resolve("2"), 3000));

  return {
    success: true,
    userId,
    data: {
      id: noteId,
      name: "Meet Note",
      content: "",
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
        name: "Shopping List",
        previewContent: "Milk, Bread, Eggs",
        createdAt: "2026-03-01T10:15:00Z",
      },
      {
        id: "2",
        name: "Meeting Notes",
        previewContent: "Discuss project timeline",
        createdAt: "2026-03-02T09:30:00Z",
      },
      {
        id: "3",
        name: "Workout Plan",
        previewContent: "Push-ups, Squats, Running",
        createdAt: "2026-03-03T07:00:00Z",
      },
      {
        id: "4",
        name: "Book Ideas",
        previewContent: "Fantasy novel outline",
        createdAt: "2026-03-04T12:45:00Z",
      },
      {
        id: "5",
        name: "Recipe",
        previewContent: "Pasta with tomato sauce",
        createdAt: "2026-03-05T18:20:00Z",
      },
      {
        id: "6",
        name: "Travel Plan",
        previewContent: "Visit Goa in April",
        createdAt: "2026-03-06T14:10:00Z",
      },
      {
        id: "7",
        name: "Birthday Reminder",
        previewContent: "Mom’s birthday on March 10",
        createdAt: "2026-03-07T08:00:00Z",
      },
      {
        id: "8",
        name: "Study Notes",
        previewContent: "Math formulas and examples",
        createdAt: "2026-03-08T11:25:00Z",
      },
      {
        id: "9",
        name: "Shopping List 2",
        previewContent: "Apples, Bananas, Coffee",
        createdAt: "2026-03-09T16:40:00Z",
      },
      {
        id: "10",
        name: "Project Draft",
        previewContent: "Initial wireframe sketches",
        createdAt: "2026-03-10T13:55:00Z",
      },
      {
        id: "11",
        name: "Daily Journal",
        previewContent: "Reflections on the day",
        createdAt: "2026-03-11T20:10:00Z",
      },
      {
        id: "12",
        name: "Music Playlist",
        previewContent: "Favorite rock songs",
        createdAt: "2026-03-12T09:05:00Z",
      },
      {
        id: "13",
        name: "Budget Plan",
        previewContent: "Monthly expenses breakdown",
        createdAt: "2026-03-13T15:30:00Z",
      },
      {
        id: "14",
        name: "Gift Ideas",
        previewContent: "Books, Gadgets, Perfume",
        createdAt: "2026-03-14T17:45:00Z",
      },
      {
        id: "15",
        name: "Coding Notes",
        previewContent: "JavaScript functions",
        createdAt: "2026-03-15T08:50:00Z",
      },
      {
        id: "16",
        name: "Health Goals",
        previewContent: "Drink more water",
        createdAt: "2026-03-16T10:20:00Z",
      },
      {
        id: "17",
        name: "Dream Journal",
        previewContent: "Flying over mountains",
        createdAt: "2026-03-17T06:35:00Z",
      },
      {
        id: "18",
        name: "Work Tasks",
        previewContent: "Finish report by Friday",
        createdAt: "2026-03-18T11:00:00Z",
      },
      {
        id: "19",
        name: "Shopping List 3",
        previewContent: "Cheese, Yogurt, Tea",
        createdAt: "2026-03-19T14:25:00Z",
      },
      {
        id: "20",
        name: "Event Plan",
        previewContent: "Organize team outing",
        createdAt: "2026-03-20T09:15:00Z",
      },
      {
        id: "21",
        name: "Learning Goals",
        previewContent: "Practice Python daily",
        createdAt: "2026-03-21T07:40:00Z",
      },
      {
        id: "22",
        name: "Recipe 2",
        previewContent: "Chocolate cake",
        createdAt: "2026-03-22T12:00:00Z",
      },
      {
        id: "23",
        name: "Weekend Plan",
        previewContent: "Movie night with friends",
        createdAt: "2026-03-23T18:30:00Z",
      },
      {
        id: "24",
        name: "Shopping List 4",
        previewContent: "Rice, Lentils, Oil",
        createdAt: "2026-03-24T16:10:00Z",
      },
      {
        id: "25",
        name: "Work Notes",
        previewContent: "Client feedback summary",
        createdAt: "2026-03-25T13:20:00Z",
      },
      {
        id: "26",
        name: "Travel Bucket List",
        previewContent: "Japan, Italy, Australia",
        createdAt: "2026-03-26T08:55:00Z",
      },
      {
        id: "27",
        name: "Shopping List 5",
        previewContent: "Oranges, Grapes, Honey",
        createdAt: "2026-03-27T11:45:00Z",
      },
      {
        id: "28",
        name: "Study Plan",
        previewContent: "Prepare for exams",
        createdAt: "2026-03-28T15:05:00Z",
      },
      {
        id: "29",
        name: "Recipe 3",
        previewContent: "Grilled chicken",
        createdAt: "2026-03-29T19:20:00Z",
      },
      {
        id: "30",
        name: "Shopping List 6",
        previewContent: "Butter, Jam, Cookies",
        createdAt: "2026-03-30T09:50:00Z",
      },
      {
        id: "31",
        name: "Daily Affirmations",
        previewContent: "Stay positive",
        createdAt: "2026-03-31T07:25:00Z",
      },
      {
        id: "32",
        name: "Recipe 4",
        previewContent: "Vegetable curry",
        createdAt: "2026-04-01T12:40:00Z",
      },
      {
        id: "33",
        name: "Shopping List 7",
        previewContent: "Spinach, Carrots, Peas",
        createdAt: "2026-04-02T14:15:00Z",
      },
      {
        id: "34",
        name: "Project Notes",
        previewContent: "Design improvements",
        createdAt: "2026-04-03T10:30:00Z",
      },
      {
        id: "35",
        name: "Recipe 5",
        previewContent: "Fruit salad",
        createdAt: "2026-04-04T17:00:00Z",
      },
      {
        id: "36",
        name: "Shopping List 8",
        previewContent: "Tomatoes, Onions, Garlic",
        createdAt: "2026-04-05T08:45:00Z",
      },
      {
        id: "37",
        name: "Work Reminder",
        previewContent: "Submit invoice",
        createdAt: "2026-04-06T11:10:00Z",
      },
      {
        id: "38",
        name: "Recipe 6",
        previewContent: "Pancakes with syrup",
        createdAt: "2026-04-07T13:35:00Z",
      },
      {
        id: "39",
        name: "Shopping List 9",
        previewContent: "Fish, Shrimp, Crab",
        createdAt: "2026-04-08T16:50:00Z",
      },
      {
        id: "40",
        name: "Weekend Notes",
        previewContent: "Relax and recharge",
        createdAt: "2026-04-09T20:05:00Z",
      },
    ],
  };
}

export async function deleteCurrentFolder(userId: string, folderId: string) {
  await new Promise((resolve) =>
    setTimeout(() => resolve(`${userId} ${folderId}`), 3000),
  );

  return {
    success: true,
    data: {
      folderId,
    },
  };
}
