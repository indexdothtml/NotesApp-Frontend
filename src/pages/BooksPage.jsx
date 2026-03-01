import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

import SearchBar from "../components/SearchBar.jsx";
import PaginatedItems from "../components/PaginatedItems.jsx";

function BooksPage() {
  return (
    <div>
      <SearchBar />
      <div className="flex justify-end mr-4">
        <Button variant="outlined" startIcon={<Add />}>
          New Book
        </Button>
      </div>
      <PaginatedItems item="books" />
    </div>
  );
}

export default BooksPage;
