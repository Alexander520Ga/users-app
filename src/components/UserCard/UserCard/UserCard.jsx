import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const UserCard = ({ name, id }) => {
  return (
    <article className="card">
      <div className="card-content">
        <h3>
          <Link style={{color: '#002333', textDecoration:'none',}} to={`usuario/${id}`}>{name}</Link>
        </h3>
      </div>
    </article>
  );
};

export default UserCard;
