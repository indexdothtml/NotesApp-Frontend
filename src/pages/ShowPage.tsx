import { Box, Paper, Breadcrumbs } from "@mui/material";
import { useParams, Link } from "react-router";

import TiptapEditor from "../components/TiptapEditor.tsx";

function ShowPage() {
  const { bookId, chapterId, pageId } = useParams();

  return (
    <>
      <Breadcrumbs className="sticky top-16 backdrop-blur-xs">
        <Link to="/books" className="hover:underline text-inherit">
          Books
        </Link>
        <Link
          to={`/books/${bookId}`}
          className="hover:underline text-inherit font-bold"
        >
          {bookId}
        </Link>
        <Link
          to={`/books/${bookId}/chapters/${chapterId}`}
          className="hover:underline text-inherit"
        >
          {chapterId}
        </Link>
        <Link
          to={`/books/${bookId}/chapters/${chapterId}/pages/${pageId}`}
          className="hover:underline text-inherit"
        >
          {pageId}
        </Link>
      </Breadcrumbs>
      <Box className="flex justify-center min-h-dvh mt-4 mb-4">
        <Paper elevation={3} className="w-5xl p-4">
          <TiptapEditor />
        </Paper>
      </Box>
    </>
  );
}

export default ShowPage;
