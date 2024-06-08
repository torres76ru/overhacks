import classes from "./Search.module.scss";
import search_icon from "../../assets/icons/search.svg";
import { ChangeEvent } from "react";

interface Props {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchQuery, onChange }: Props) => {
  return (
    <div className={classes.input}>
      <input
        id="search"
        name="search"
        onChange={onChange}
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
