import { Button, Tooltip, Grid } from "@mui/material";
import { Link } from "react-router";
import { Add } from "@mui/icons-material";
import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar.jsx";
import InputCard from "../components/InputCard.jsx";
import PaginatedBooks from "../components/PaginatedBooks.jsx";
import ItemCard from "../components/ItemCard.jsx";
import useModal from "../hooks/useModal.js";
import useAuth from "../hooks/useAuth.js";

function BooksPage() {
  const { dispatchOpenModal } = useModal();

  const { userData } = useAuth();

  const [booksDetails, setBooksDetails] = useState(null);

  const userId = userData?._id;

  // For testing purpose fetching using dummy json file.
  useEffect(() => {
    // Fetch books using userId
    fetch("http://localhost:5173/booksData.json")
      .then((response) => response.json())
      .then((data) => setBooksDetails(data));
  }, [userId]);

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

        <h1 className="ml-4 font-semibold">Books</h1>

        {/* Show all Books created by User */}
        <PaginatedBooks totalBooks={booksDetails?.totalItems}>
          {booksDetails && booksDetails?.data?.length !== 0 ? (
            booksDetails?.data?.map((book) => (
              <Tooltip title={book?.name} key={book?._id}>
                <Grid size={2}>
                  <Link to={`/books/${book?._id}`}>
                    <ItemCard item={book} child="Chapters" />
                  </Link>
                </Grid>
              </Tooltip>
            ))
          ) : (
            <div>Books not available to show create new book</div>
          )}
        </PaginatedBooks>
      </div>

      <InputCard inputName="book" />
    </>
  );
}

export default BooksPage;
