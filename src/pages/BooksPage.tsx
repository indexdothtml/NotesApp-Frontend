import { Button, Tooltip, Grid } from "@mui/material";
import { Link } from "react-router";
import { Add } from "@mui/icons-material";
import { useState, useEffect, useCallback } from "react";

import SearchBar from "../components/SearchBar.tsx";
import InputCardModal from "../components/InputCardModal.tsx";
import PaginatedItems from "../components/PaginatedItems.tsx";
import DataCard from "../components/DataCard.tsx";
import useModal from "../hooks/useModal.ts";
import useAuth from "../hooks/useAuth.ts";
import type { ItemDetails, InputCardFormValues } from "../types/types.ts";

type BookData = {
  id: number;
  bookName: string;
  totalChapters: number;
  createdAt: string;
  updatedAt: string;
};

function BooksPage() {
  const { dispatchOpenModal } = useModal();

  const { userData } = useAuth();

  const [booksDetails, setBooksDetails] = useState<ItemDetails<BookData>>({
    data: null,
    itemCount: 0,
    totalItems: 0,
  });

  const userId = userData?._id;

  // For testing purpose fetching using dummy json file.
  useEffect(() => {
    // Fetch books using userId
    fetch("http://localhost:5173/booksData.json")
      .then((response) => response.json())
      .then((data) => setBooksDetails(data));
  }, [userId]);

  const handleCreateNewBook = useCallback((data: InputCardFormValues) => {
    console.log(`New book name: ${data.name}`);
    // Call create new book api.
  }, []);

  return (
    <>
      <div>
        <SearchBar />
        <div className="flex justify-end mr-4">
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={dispatchOpenModal}
          >
            New Book
          </Button>
        </div>

        <h1 className="ml-4 font-semibold text-2xl">Books</h1>

        {/* Show all Books created by User */}
        <PaginatedItems totalItems={booksDetails.totalItems}>
          {booksDetails.data && booksDetails.data.length !== 0 ? (
            booksDetails.data.map((book) => (
              <Tooltip title={book.bookName} key={book.id}>
                <Grid size={2}>
                  <Link to={`/books/${book.id}`}>
                    <DataCard
                      data={{
                        heading: book.bookName,
                        childrenCount: book.totalChapters,
                        createdAt: book.createdAt,
                        updatedAt: book.updatedAt,
                      }}
                      showDataFor="book"
                    />
                  </Link>
                </Grid>
              </Tooltip>
            ))
          ) : (
            <div>Books not available to show create new book</div>
          )}
        </PaginatedItems>
      </div>

      {/* InputCardModal is a modal which can be opened with useModal hook */}
      <InputCardModal onInputSubmit={handleCreateNewBook} />
    </>
  );
}

export default BooksPage;
