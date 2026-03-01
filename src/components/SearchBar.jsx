import { Search } from "@mui/icons-material";

function SearchBar() {
  return (
    <div className="border p-2 w-fit flex gap-2 m-auto mt-2 rounded-md">
      <Search />
      <input
        placeholder="Search.."
        className="outline-none placeholder:text-inherit"
      />
    </div>
  );
}

export default SearchBar;
