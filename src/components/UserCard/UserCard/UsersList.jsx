import React from "react";
import UserCard from "./UserCard";
import "./styles.css";

const UsersList = ({ users }) => {
  return (
    <div className="animate__animated animate__fadeInLeft">
      <main className="container-main grid mt-4 ">
        {users.map((user) => {
          const { name, id} = user;
          return <UserCard key ={id} name={name} id={id} />;
        })}
      </main>
    </div>
  );
};

export default UsersList;
