import { Pagination, Box, Grid } from "@mui/material";
import { useState } from "react";

function PaginatedBooks({ children, totalBooks }) {
  const booksPerPage = 12;

  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <div className="m-4">
      <Box className="flex-1 justify-center">
        <Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 8 }}>
          {children}
        </Grid>
        <div className="flex justify-center items-center mt-4">
          <Pagination
            page={page}
            onChange={handlePageChange}
            count={Math.ceil(totalBooks / booksPerPage)}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Box>
    </div>
  );
}

export default PaginatedBooks;
