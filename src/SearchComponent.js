import React, { useState } from "react";
import SearchInputComponent from "./SearchInputComponent";

import ListComponent from "./ListComponent";

function SearchComponent({ userList }) {
  let [users, setUser] = useState(userList);
  const [spinner, setSpinner] = useState(false);

  let [searchValue, setSearchValue] = useState("");

  const fetchSeachValue = searchResult => {
    if (searchResult.length === 0) {
      setUser(userList);
    }
    setSearchValue(searchResult);
  };
  const setspinnerFlag = flag => {
    setSpinner(flag);
  };

  const fetchSearchedUser = searchResult1 => {
    const searchedUser = userList;
    if (searchResult1.length > 0) {
      const newUser = searchedUser.filter((user, index) => {
        return (
          user.first_name.toLowerCase() === searchResult1.toLowerCase() ||
          user.last_name.toLowerCase() === searchResult1.toLowerCase()
        );
      });
      setUser(newUser);
    } else {
      setUser(userList);
    }
  };

  return (
    <div>
      <SearchInputComponent
        searchValue={searchValue}
        fetchSeachValue={fetchSeachValue}
        fetchSearchedUser={fetchSearchedUser}
        setspinnerFlag={setspinnerFlag}
      />
      <ListComponent lists={users} spinner={spinner} />
    </div>
  );
}

export default SearchComponent;
