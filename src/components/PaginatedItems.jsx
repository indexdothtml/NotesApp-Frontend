import { Pagination, Grid, Box, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";

import ItemCard from "./ItemCard";

function PaginatedItems({ item }) {
  const itemsPerPage = 12;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (item === "books") {
      // api query required = page, itemsPerPage and item name
      // Fetch books with limit 12
      fetch("http://localhost:5173/booksData.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log("got an error", error));
    } else if (item === "chapters") {
      // Fetch chapters with limit 12
    } else if (item === "pages") {
      // Fetch pages with limit 12
    }
    // Fetch data and update state setData.
  }, [page, item]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="m-4">
      <Box className="flex-1 justify-center">
        <Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 8 }}>
          {data?.data?.map((item) => (
            <Tooltip key={item?._id} title={item?.name}>
              <Grid size={2}>
                <ItemCard item={item} />
              </Grid>
            </Tooltip>
          ))}
        </Grid>
        <div className="flex justify-center items-center mt-4">
          <Pagination
            page={page}
            onChange={handlePageChange}
            count={Math.ceil(data?.totalItems / itemsPerPage)}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Box>
    </div>
  );
}

export default PaginatedItems;
