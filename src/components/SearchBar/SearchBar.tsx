import css from "./SearchBar.module.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { SearchBarProps } from "../App/App.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Please enter a search query!");
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
          className={css.input}
          name="search"
          required
        />
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
