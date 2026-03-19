export type UserData = {
  id: string;
  name: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export type Note = {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type NotePreview = {
  id: string;
  name: string;
  previewContent: string;
  createdAt: string;
};

export type Hyperlink = {
  href: string;
  target?: string;
};
