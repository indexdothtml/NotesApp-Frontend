import { IconButton, ButtonGroup } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatUnderlined,
  FormatStrikethrough,
} from "@mui/icons-material";
import type { Editor } from "@tiptap/react";

type EditorState = {
  isBold: boolean;
};

interface TiptapMenuBarProps {
  editor: Editor | null;
  editorState: EditorState;
}

function TiptapMenuBar({ editor, editorState }: TiptapMenuBarProps) {
  if (!editor) return null;

  console.log(editorState.isBold);

  return (
    <div className="">
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <IconButton
          color="primary"
          aria-label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editorState.isBold ? "bg-blue-400" : ""}
        >
          <FormatBold />
        </IconButton>

        <IconButton
          color="primary"
          aria-label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FormatItalic />
        </IconButton>

        <IconButton
          color="primary"
          aria-label="Unordered list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <FormatListBulleted />
        </IconButton>

        <IconButton
          color="primary"
          aria-label="Ordered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <FormatListNumbered />
        </IconButton>

        <IconButton
          color="primary"
          aria-label="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FormatUnderlined />
        </IconButton>

        <IconButton
          color="primary"
          aria-label="Strike through"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <FormatStrikethrough />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

export default TiptapMenuBar;
