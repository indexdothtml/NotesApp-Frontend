import { type Editor, useEditorState } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Braces,
  Underline,
  Quote,
  List,
  ListOrdered,
  Minus,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Link,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HyperlinkDialog } from "@/components/hypterlink-dialog";
import { menuBarStateSelector } from "@/lib/utils";
import type { Hyperlink } from "@/types/types";

type TiptapTextEditorMenuProps = {
  editor: Editor;
  readonly: boolean;
};

export function TiptapTextEditorMenu({
  editor,
  readonly = false,
}: TiptapTextEditorMenuProps) {
  const editorToolBox = {
    toggleBold: () => editor.chain().focus().toggleBold().run(),
    toggleItalic: () => editor.chain().focus().toggleItalic().run(),
    toggleStrike: () => editor.chain().focus().toggleStrike().run(),
    toggleUnderline: () => editor.chain().focus().toggleUnderline().run(),
    toggleCode: () => editor.chain().focus().toggleCode().run(),
    toggleCodeBlock: () => editor.chain().focus().toggleCodeBlock().run(),
    toggleBlockquote: () => editor.chain().focus().toggleBlockquote().run(),
    toggleBulletList: () => editor.chain().focus().toggleBulletList().run(),
    toggleOrderedList: () => editor.chain().focus().toggleOrderedList().run(),
    addHorizontalLine: () => editor.chain().focus().setHorizontalRule().run(),
    toggleHeading1: () =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    toggleHeading2: () =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    toggleHeading3: () =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    toggleHeading4: () =>
      editor.chain().focus().toggleHeading({ level: 4 }).run(),
    toggleHeading5: () =>
      editor.chain().focus().toggleHeading({ level: 5 }).run(),
    toggleHeading6: () =>
      editor.chain().focus().toggleHeading({ level: 6 }).run(),
    toggleLink: ({ href }: Hyperlink) =>
      editor.chain().focus().toggleLink({ href, target: "_blank" }).run(),
  };

  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  });

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <Button
          variant={editorState.isBold ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleBold}
          disabled={readonly}
          aria-label="Bold"
        >
          <Bold />
        </Button>

        <Button
          variant={editorState.isItalic ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleItalic}
          disabled={readonly}
          aria-label="Italic"
        >
          <Italic />
        </Button>

        <Button
          variant={editorState.isStrike ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleStrike}
          disabled={readonly}
          aria-label="Strikethrough"
        >
          <Strikethrough />
        </Button>

        <Button
          variant={editorState.isUnderline ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleUnderline}
          disabled={readonly}
          aria-label="Underline"
        >
          <Underline />
        </Button>
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-1">
        <Button
          variant={editorState.isCode ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleCode}
          disabled={readonly}
          aria-label="Code"
        >
          <Code />
        </Button>

        <Button
          variant={editorState.isCodeBlock ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleCodeBlock}
          disabled={readonly}
          aria-label="Code block"
        >
          <Braces />
        </Button>

        <Button
          variant={editorState.isBlockquote ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleBlockquote}
          disabled={readonly}
          aria-label="Blockquote"
        >
          <Quote />
        </Button>
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-1">
        <Button
          variant={editorState.isBulletList ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleBulletList}
          disabled={readonly}
          aria-label="Bullet list"
        >
          <List />
        </Button>

        <Button
          variant={editorState.isOrderedList ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleOrderedList}
          disabled={readonly}
          aria-label="Ordered list"
        >
          <ListOrdered />
        </Button>
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={editorToolBox.addHorizontalLine}
          disabled={readonly}
          aria-label="Horizontal line"
        >
          <Minus />
        </Button>

        <HyperlinkDialog formSubmitHandler={editorToolBox.toggleLink}>
          <Button
            variant={editorState.isLink ? "default" : "outline"}
            size="icon"
            disabled={readonly}
            aria-label="Hyperlink"
          >
            <Link />
          </Button>
        </HyperlinkDialog>
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-1">
        <Button
          variant={editorState.isHeading1 ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleHeading1}
          disabled={readonly}
          aria-label="H1 heading"
        >
          <Heading1 />
        </Button>

        <Button
          variant={editorState.isHeading2 ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleHeading2}
          disabled={readonly}
          aria-label="H2 heading"
        >
          <Heading2 />
        </Button>

        <Button
          variant={editorState.isHeading3 ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleHeading3}
          disabled={readonly}
          aria-label="H3 heading"
        >
          <Heading3 />
        </Button>

        <Button
          variant={editorState.isHeading4 ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleHeading4}
          disabled={readonly}
          aria-label="H4 heading"
        >
          <Heading4 />
        </Button>

        <Button
          variant={editorState.isHeading5 ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleHeading5}
          disabled={readonly}
          aria-label="H5 heading"
        >
          <Heading5 />
        </Button>

        <Button
          variant={editorState.isHeading6 ? "default" : "outline"}
          size="icon"
          onClick={editorToolBox.toggleHeading6}
          disabled={readonly}
          aria-label="H6 heading"
        >
          <Heading6 />
        </Button>
      </div>
    </div>
  );
}
