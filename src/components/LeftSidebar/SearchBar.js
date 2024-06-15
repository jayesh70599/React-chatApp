import React from "react";

function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="Search chats"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    borderRadius: "5px",
    width: "80%",
    backgroundColor: "#fff",
    outline: "none",
    margin: "auto",
    padding: "5px",
    border: "1px solid #cccccc",
  },
};
export default SearchBar;