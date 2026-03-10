import { useParams, Link } from "react-router";
import { Button, Breadcrumbs, Tooltip, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState, useEffect, useCallback } from "react";

import SearchBar from "../components/SearchBar.tsx";
import PaginatedItems from "../components/PaginatedItems.tsx";
import InputCardModal from "../components/InputCardModal.tsx";
import DataCard from "../components/DataCard.tsx";
import useModal from "../hooks/useModal.ts";
import type { InputCardFormValues, ItemDetails } from "../types/types.ts";

type ChapterData = {
  id: string;
  chapterName: string;
  totalPages: number;
  createdAt: string;
  updatedAt: string;
};

function BookPage() {
  const { bookId } = useParams();

  const { dispatchOpenModal } = useModal();

  const [chaptersDetails, setChaptersDetails] = useState<
    ItemDetails<ChapterData>
  >({ data: null, itemCount: 0, totalItems: 0 });

  const [bookName, setBookName] = useState("");

  // For testing purpose fetching using dummy json file.
  useEffect(() => {
    fetch("http://localhost:5173/booksData.json")
      .then((response) => response.json())
      .then((data) => {
        const book = data?.data?.find((book: any) => book?.id === bookId);
        // console.log(data.data.find((book) => book.id === bookId));
        setBookName(book?.bookName);
      });
    // Fetch books using bookId
    fetch("http://localhost:5173/chaptersData.json")
      .then((response) => response.json())
      .then((data) => setChaptersDetails(data));
  }, [bookId]);

  const handleCreateNewChapter = useCallback((data: InputCardFormValues) => {
    console.log(`New chapter name: ${data.name}`);
    // Call create new chapter api.
  }, []);

  return (
    <>
      <div>
        <SearchBar />
        <div className="flex justify-between ml-4 mr-4">
          <Breadcrumbs>
            <Link to="/books" className="hover:underline text-inherit">
              Books
            </Link>
            <Link
              to={`/books/${bookId}`}
              className="hover:underline text-inherit font-bold"
            >
              {bookName}
            </Link>
          </Breadcrumbs>

          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={dispatchOpenModal}
          >
            New Chapter
          </Button>
        </div>

        <h1 className="ml-4 font-semibold text-2xl">{bookName}</h1>

        {/* Show all Chapters of the Book */}
        <PaginatedItems totalItems={chaptersDetails.totalItems}>
          {chaptersDetails.data && chaptersDetails.data.length !== 0 ? (
            chaptersDetails.data.map((chapter) => (
              <Tooltip title={chapter.chapterName} key={chapter.id}>
                <Grid size={2}>
                  <Link to={`/books/${bookId}/chapters/${chapter.id}`}>
                    <DataCard
                      data={{
                        heading: chapter.chapterName,
                        childrenCount: chapter.totalPages,
                        createdAt: chapter.createdAt,
                        updatedAt: chapter.updatedAt,
                      }}
                      showDataFor="chapter"
                    />
                  </Link>
                </Grid>
              </Tooltip>
            ))
          ) : (
            <div>Chapters not available to show create new chapter</div>
          )}
        </PaginatedItems>
      </div>

      <InputCardModal onInputSubmit={handleCreateNewChapter} />
    </>
  );
}

export default BookPage;
