import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import AllUsersScreen from "./AllUsersScreen";
import * as api from "../../api/api";
import useApi from "../../hooks/useApi";

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const { request, data } = useApi(api.getAllUsers);
  useEffect(() => {
    async function fetchData() {
      await request();
    }
    fetchData();
  }, []);

  //   console.log("search", search);
  let userObj = [
    {
      name: "faisal",
      size: "L",
      type: "ok",
      style: "yes",
    },
    {
      name: "faisal rehman",
      size: "L",
      type: "ok",
      style: "yes",
    },
  ];

  function handleChange({ target }) {
    setSearch(target.value);
    setSearchedUsers(
      data.users.filter((element) => element.firstName.includes(target.value))
    );
    // console.log("new", newObj);
  }

  return (
    <Layout>
      {data && (
        <AllUsersScreen
          search={search}
          handleChange={handleChange}
          userObj={userObj}
          searchedUsers={searchedUsers}
          data={data}
        />
      )}
    </Layout>
  );
};

export default AllUsers;
