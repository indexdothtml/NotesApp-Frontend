import { useParams } from "react-router";
import { Button, Breadcrumbs, Tooltip, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router";
import { useState, useEffect, useCallback } from "react";

import SearchBar from "../components/SearchBar.jsx";
import PaginatedItems from "../components/PaginatedItems.jsx";
import InputCardModal from "../components/InputCardModal.jsx";
import DataCard from "../components/DataCard.jsx";
import useModal from "../hooks/useModal.ts";
import type { InputCardFormValues, ItemDetails } from "../types/types.ts";

type PageData = {
  id: number;
  pageNumber: number;
  contentPreview: string;
  createdAt: string;
  updatedAt: string;
};

function ChapterPage() {
  const { bookId, chapterId } = useParams();

  const { dispatchOpenModal } = useModal();

  const [pageDetails, setPageDetails] = useState<ItemDetails<PageData>>({
    data: null,
    itemCount: 0,
    totalItems: 0,
  });

  // For testing purpose fetching using dummy json file.
  useEffect(() => {
    // Fetch books using bookId
    fetch("http://localhost:5173/pagesData.json")
      .then((response) => response.json())
      .then((data) => setPageDetails(data));
  }, [chapterId]);

  const handleCreateNewPage = useCallback((data: InputCardFormValues) => {
    console.log(`New page: ${data.name}`);
    // Open page text editor.
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
            <Link
              to={`/books/${bookId}/${chapterId}`}
              className="hover:underline text-inherit"
            >
              {chapterId}
            </Link>
          </Breadcrumbs>

          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={dispatchOpenModal}
          >
            New Page
          </Button>
        </div>

        <h1 className="ml-4 font-semibold text-2xl">The Project Hail Mary</h1>

        {/* Show all Chapters of the Book */}
        <PaginatedItems totalItems={pageDetails.totalItems}>
          {pageDetails.data && pageDetails.data.length !== 0 ? (
            pageDetails.data.map((page) => (
              <Tooltip title={page.pageNumber} key={page.id}>
                <Grid size={2}>
                  <Link
                    to={`/books/${bookId}/chapters/${chapterId}/pages/${page.id}`}
                  >
                    <DataCard
                      data={{
                        heading: String(page.pageNumber),
                        pagePreview: page.contentPreview,
                        createdAt: page.createdAt,
                        updatedAt: page.updatedAt,
                      }}
                      showDataFor="page"
                    />
                  </Link>
                </Grid>
              </Tooltip>
            ))
          ) : (
            <div>Pages not available to show create new page</div>
          )}
        </PaginatedItems>
      </div>

      <InputCardModal onInputSubmit={handleCreateNewPage} />
    </>
  );
}

export default ChapterPage;
