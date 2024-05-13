import classes from "./Search.module.scss";
import search_icon from "../../assets/icons/search.svg";
import { ChangeEvent, useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={classes.input}>
      <input
        id="search"
        name="search"
        onChange={handleChange}
        value={searchQuery}
      />
      {!searchQuery && (
        <span>
          <img src={search_icon} alt="search icon" />
          <span>Search</span>
        </span>
      )}
    </div>
  );
};

export default Search;
