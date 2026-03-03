import { useParams } from "react-router";
import { Button, Breadcrumbs, Tooltip, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router";
import { useState, useEffect, useCallback } from "react";

import SearchBar from "../components/SearchBar.jsx";
import PaginatedChapters from "../components/PaginatedChapters.jsx";
import InputCardModal from "../components/InputCardModal.jsx";
import ItemCard from "../components/ItemCard.jsx";
import useModal from "../hooks/useModal.js";

function BookPage() {
  const { bookId } = useParams();

  const { dispatchOpenModal } = useModal();

  const [chaptersDetails, setChaptersDetails] = useState(null);

  // For testing purpose fetching using dummy json file.
  useEffect(() => {
    // Fetch books using bookId
    fetch("http://localhost:5173/chaptersData.json")
      .then((response) => response.json())
      .then((data) => setChaptersDetails(data));
  }, [bookId]);

  const handleCreateNewChapter = useCallback((data) => {
    console.log(`New chapter name: ${data?.name}`);
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
              {bookId}
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

        <h1 className="ml-4 font-semibold text-2xl">The Project Hail Mary</h1>

        {/* Show all Chapters of the Book */}
        <PaginatedChapters totalChapters={chaptersDetails?.totalItems}>
          {chaptersDetails && chaptersDetails?.data?.length !== 0 ? (
            chaptersDetails?.data?.map((chapter) => (
              <Tooltip title={chapter?.name} key={chapter?._id}>
                <Grid size={2}>
                  <Link to={`/books/${bookId}/chapters/${chapter?._id}`}>
                    <ItemCard item={chapter} child="Pages" />
                  </Link>
                </Grid>
              </Tooltip>
            ))
          ) : (
            <div>Chapters not available to show create new chapter</div>
          )}
        </PaginatedChapters>
      </div>

      <InputCardModal onInputSubmit={handleCreateNewChapter} />
    </>
  );
}

export default BookPage;
