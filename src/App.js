import React from "react";
import "./styles.css";
import SearchComponent from './SearchComponent'
import UsersList from './search'

export default function App() {
  return (
    <div className="App">
      <h1>Search List</h1>
      <SearchComponent userList={UsersList}/>
    </div>
  );
}
